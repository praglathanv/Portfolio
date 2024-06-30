import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Outlet, Link } from 'react-router-dom';
import "./css/MainPage.css";
import MainPagePages from '../components/MainPagePages';
import MainPageCover from '../components/MainPageCover';
import MainPageLogos from '../components/MainPageLogos';

gsap.registerPlugin(TextPlugin);

const MainPage = () => {
  const textRef = useRef(null);
  const cometRef = useRef(null);

  useEffect(() => {
    // Ensuring the page is in fullscreen mode
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }

    const tl = gsap.timeline();

    // MainPageCover animation
    tl.fromTo('.cover', { x: '-100%' }, { x: '0%', duration: 1, ease: 'power2.out' })
      .fromTo('.cover-empty', { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo('.cover-elements', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2 });

    // MainPagePages animation
    tl.fromTo('.pages', { y: '-100%', opacity: 0, visibility: 'hidden' }, { y: '0%', opacity: 1, visibility: 'visible', duration: 1, ease: 'power2.out' });

    // MainPageLogos animation
    tl.fromTo('.main-logos', { y: '-50px', opacity: 0, visibility: 'hidden' }, { y: '0px', opacity: 1, visibility: 'visible', duration: 1, ease: 'power2.out' });

    // Typing animation
    const textTl = gsap.timeline({ repeat: -1 });

    textTl.to(textRef.current, {
      duration: 2,
      text: "Front-End",
      ease: "none",
      repeatDelay: 1,
    })
    .to(textRef.current, {
      duration: 0.5,
      text: "",
      ease: "none",
    })
    .to(textRef.current, {
      duration: 2,
      text: "Back-End",
      ease: "none",
      repeatDelay: 1,
    })
    .to(textRef.current, {
      duration: 0.5,
      text: "",
      ease: "none",
    })
    .to(textRef.current, {
      duration: 2,
      text: "Machine-Learning",
      ease: "none",
      repeatDelay: 1,
    })
    .to(textRef.current, {
      duration: 0.5,
      text: "",
      ease: "none",
    })
    .to(textRef.current, {
      duration: 2,
      text: "Designing",
      ease: "none",
      repeatDelay: 1,
    })
    .to(textRef.current, {
      duration: 0.5,
      text: "",
      ease: "none",
    })

    tl.add(textTl, "+=0");

    // Make comet visible after 3 seconds
    gsap.to(cometRef.current, {
      opacity: 0.5,
      delay: 2.5,
      duration: 0.5,
    });

    // Comet animation
    const animateComet = () => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      gsap.to(cometRef.current, {
        x: randomX,
        y: randomY,
        duration: 2,
        ease: "power1.inOut",
        onComplete: animateComet
      });
    };

    animateComet();

    return () => {
      tl.kill();
      textTl.kill();
    };
  }, []);

  return (
    <div className='bg-black h-[100vh] relative'>
      <Link to='/portfolio' className='relative z-[9]'>
        <h1 className='text-white font-bold text-5xl ml-5 lg:ml-8 pt-2'>Praglathan</h1>
      </Link>
      <MainPageCover textRef={textRef} />
      <MainPagePages />
      <MainPageLogos />
      <div ref={cometRef} className="big-comet"></div>
    </div>
  );
}

export default MainPage;
