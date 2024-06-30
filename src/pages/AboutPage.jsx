import React, { useEffect } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MainPageLogos from '../components/MainPageLogos';
import "./css/AboutPage.css"

const AboutPage = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        '.border-box', 
        { borderColor: 'transparent' }, 
        { borderColor: 'white', duration: 1, ease: 'power3.out' }
      )
      .fromTo(
        '.inner-text', 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power3.out' },
        '-=0.5'
      )
      .to('.main-logos', {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });

  }, []);

  return (
    <div className='relative'> 
      <div className="backbtn absolute top-[0.3rem] left-[50%] bg-white rounded-full text-4xl cursor-pointer">
        <Link to='/portfolio'><FaArrowCircleLeft /></Link>
      </div>
      <div className='text-white z-[2] border border-white border-box  pl-5 lg:px-5 py-16 flex flex-col gap-y-16 absolute top-[8rem] left-[2.1rem] lg:left-[8rem] lg:w-[1100px]'>
        <p className="inner-text">Hello! I'm Pragalathan, a passionate and dedicated Full Stack Developer with a keen interest in building dynamic and responsive web applications. My journey in web development started from 2023, and since then, I've been continually honing my skills in both front-end and back-end technologies.</p>
        
        <p className="inner-text">I hold a BCA ~ [Bachelore of computer application] degree from Madurai Kamraj University, where I developed a strong foundation in software development principles and practices. During my studies, I worked on various projects that fueled my passion for coding and problem-solving.</p>

        <p className="inner-text">I am a proactive learner and a problem-solver at heart. I thrive in collaborative environments and am always eager to take on new challenges that push my boundaries. My goal is to contribute to meaningful projects and help create innovative solutions that make a difference.</p>
      </div>
      <div className="relative z-[4] top-[6rem] left-[2rem] bg-black">
        <MainPageLogos />
      </div>
    </div>
  );
};

export default AboutPage;
