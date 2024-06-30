import React, { useEffect, useRef } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import "./css/ProjectPage.css";
import MainPageLogos from '../components/MainPageLogos';
import Projects from '../components/Projects';

const ProjectPage = () => {
  const logosRef = useRef(null);
  const projectCoversRef = useRef([]);
  
  useEffect(() => {
    // Trigger the flip animation one by one
    gsap.fromTo(
      projectCoversRef.current,
      {
        rotateY: -180,
        visibility: 'hidden'
      },
      {
        rotateY: 0,
        visibility: 'visible',
        duration: 1,
        delay: (index) => index * 0.5 // Delay each flip animation
      }
    );
    
    gsap.to(".main-logos", {
      opacity: 1,
      y: 0,
      visibility: 'visible',
      delay: 0.5, 
      duration: 1, // Animation duration
    });
  }, []);

  return (
    <div className='relative h-[100vh]'>
      <h1 className='absolute text-white mx-7 mt-3 text-3xl font-bold'>Projects</h1>
      <div className="backbtn absolute top-[0.3rem] left-[50%] bg-white rounded-full text-4xl cursor-pointer">
        <Link to='/portfolio'><FaArrowCircleLeft /></Link>
      </div>
      <div className="h-[100%]  text-white flex items-center">
         <Projects projectCoversRef={projectCoversRef}/>
      </div>
      <div className="absolute  top-[6rem] w-full">
        <MainPageLogos  />
      </div>
    </div>
  );
}

export default ProjectPage;
