import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power1 } from 'gsap';
import { useNavigate } from 'react-router-dom';
import ModelViewer from '../components/ModelViewer';
import { CSSPlugin } from 'gsap/CSSPlugin';
import "./css/HomePage.css";

gsap.registerPlugin(CSSPlugin);

const HomePage = () => {
  const modelUrl = '/assets/chain2.glb'; 
  const modelRef = useRef(null);
  const headingRef = useRef(null);
  const clickRef = useRef(null); 
  const [modelLoaded, setModelLoaded] = useState(false);
  const [animationsCompleted, setAnimationsCompleted] = useState(false); 
  const [startNavigation, setStartNavigation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (modelLoaded) {
      const tl = gsap.timeline({
        onStart: () => {
          gsap.set(headingRef.current, { visibility: 'visible' }); 
        },
        onComplete: () => {
          gsap.set(modelRef.current, { zIndex: 2 });
          gsap.set(headingRef.current, { zIndex: 1 });
          gsap.set(clickRef.current, { display: 'block' });
          setAnimationsCompleted(true); 
        }
      });

      tl.from(modelRef.current, { duration: 1, x: 500, opacity: 0, ease: Power1.easeOut })
        .from(headingRef.current, { duration: 1, x: -800, opacity: 0, ease: Power1.easeOut }, "-=0.5");
    }
  }, [modelLoaded]);

  useEffect(() => {
    if (startNavigation) {
      // This part will navigate after 0.3s delay to allow fullscreen API request
      navigate('/portfolio', { replace: true });
    }
  }, [startNavigation, navigate]);

  const handleClick = () => {
    const button = document.querySelector('.zoom-button');
    const textWidth = button.offsetWidth;
    const textHeight = button.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scale = Math.max(viewportWidth / textWidth, viewportHeight / textHeight);
  
    gsap.to(button, {
      duration: 0.3, 
      scale: scale * 70,
      ease: "power2.inOut", 
      onComplete: () => {
        // Request fullscreen and then set navigation to true
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().then(() => setStartNavigation(true));
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen().then(() => setStartNavigation(true));
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen().then(() => setStartNavigation(true));
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen().then(() => setStartNavigation(true));
        } else {
          // Fallback if fullscreen is not supported
          setStartNavigation(true);
        }
      }
    });
  };

  return (
    <div className="App">
      <div className="canvas-container">
        <div className="model absolute z-[1]" ref={modelRef}>
          <ModelViewer
            modelUrl={modelUrl}
            modelPosition={[0.9, 0, 0]}
            modelRotation={[Math.PI / 4, Math.PI / 4, 0]}
            onLoad={() => setModelLoaded(true)}
          />
        </div>
        <h1 className="heading absolute top-[40%] left-[50%]" ref={headingRef}>Welcome</h1>
        <p ref={clickRef} className='zoom-button hidden' onClick={handleClick}>Click</p>
      </div>
    </div>
  );
};

export default HomePage;
