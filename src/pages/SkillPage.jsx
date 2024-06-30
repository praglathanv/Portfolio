import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import FrontEnd from '../components/FrontEnd';
import BackEnd from '../components/BackEnd';
import BackBtn from '../components/BackBtn';

const SkillPage = () => {
  const frontEndRef = useRef(null);
  const backEndRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [frontEndRef.current, backEndRef.current],
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo(
      frontEndRef.current.querySelectorAll('.inner'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      '-=0.5'
    )
    .fromTo(
      backEndRef.current.querySelectorAll('.inner'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      '-=0.5'
    );
  }, []);

  return (
    <div className='bg-black h-[100vh] relative'>
      <h1 className='text-white text-3xl py-4 px-8 font-bold'>Skills</h1>
      <BackBtn/>
      <div className="flex justify-around">
        <div ref={frontEndRef} className="cover gradient-bg gradient-change1 p-3 m-2 lg:mx-10 rounded-3xl flex-1">
          <FrontEnd />
        </div>
        <div ref={backEndRef} className="cover gradient-bg2 gradient-change2 p-3 m-2 lg:mx-10 rounded-3xl flex-1">
          <BackEnd />
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
