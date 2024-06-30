import React, { useEffect, useRef } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import "./css/FeatsPage.css";
import LogoVertical from '../components/LogoVertical';

const FeatsPage = () => {
  const coverBoxRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const coverBoxes = coverBoxRef.current.querySelectorAll('.cover-box');

    // Ensuring the cover boxes are initially hidden
    gsap.set(coverBoxes, { scale: 0, opacity: 0 });
    gsap.set(logoRef.current, { y: -100, opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "back.out(1.4)" } });
    tl.staggerTo(coverBoxes, 0.5, { scale: 1, opacity: 1 }, 0.25)
      .to(logoRef.current, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "+=0.5"); // Add the logo animation to the timeline with a delay

    // Cleanup on unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className='relative overflow-y-scroll h-screen'>
      <h1 className='absolute text-white mx-7 mt-3 text-3xl font-bold'>Feats</h1>
      <div className="backbtn absolute top-[0.3rem] left-[50%] bg-white rounded-full text-4xl cursor-pointer">
        <Link to='/portfolio'><FaArrowCircleLeft /></Link>
      </div>
      <div className='relative z-[4] w-11/12 mt-20 ' ref={coverBoxRef}>
        <div className="flex">
          {/*Put the future archievments. add flex-1 and margin adjustments*/}
          <div className="cover-box border-box relative text-white  h-[450px] w-[550px] px-3 bg-black m-3 lg:my-10 lg:ml-32">
               <h2 className='ml-4 pt-3 text-xl tracking-wide font-bold'>Internship at Vivartha</h2>
               <p className='mt-4 px-3'>I commenced my career journey as a UI/UX Developer Intern at Vivartha, situated in Dindigul, Tamil Nadu, from January 2024 to March 2024. During this enriching internship, I honed various skills essential to the realm of web development. My responsibilities encompassed crafting engaging landing pages, mastering the art of designing intuitive user interfaces, implementing data fetching mechanisms, and gaining insights into business strategies and digital marketing techniques. This pivotal experience marked the inception of my professional trajectory, equipping me with a solid foundation to thrive in the dynamic field of technology.</p>
               <a href="" className='absolute bottom-2 right-5 underline'>View certificate</a>
          </div>
         
        </div>
      </div>
      <LogoVertical ref={logoRef}/>
    </div>
  );
}

export default FeatsPage;
