import React from 'react';
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';

const MainPagePages = () => {
  const navigate = useNavigate();

  const handleButtonClick = (e, path) => {
    const clickedElement = e.target;
    const rect = clickedElement.getBoundingClientRect();
    const offsetX = rect.left + (rect.width / 2);
    const offsetY = rect.top + (rect.height / 2);
  
    const drop = document.createElement('div');
    drop.classList.add('water-drop');
    drop.style.top = `${offsetY}px`;
    drop.style.left = `${offsetX}px`;
    document.body.appendChild(drop);
  
    gsap.to(drop, {
      scale: 80,
      duration: 0.6,
      ease: 'power2.inOut',
      transformOrigin: '50% 50%',
      onComplete: () => {
        navigate(path, { replace: true });
        gsap.to(drop, {
          scale: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            drop.remove();
          }
        });
      }
    });
  };

  return (
    <div className="pages absolute top-[20px] z-[5]">
      <div className='flex w-[100vw] justify-between px-5 lg:px-16'>
        <ul className='text-white flex flex-col gap-y-60 '>
          <li className='mt-20 cursor-pointer hover-underline'>Resume</li>
          <li onClick={(e) => handleButtonClick(e, '/portfolio/projects')} className='cursor-pointer hover-underline'>Projects</li>
          <li onClick={(e) => handleButtonClick(e, '/portfolio/about')} className='cursor-pointer hover-underline'>About</li>
        </ul>
        <ul className='text-white flex flex-col ml-5 gap-y-60 '>
          <a href="mailto:pragalathanv07@gmail.com"><li className='mt-20 cursor-pointer hover-underline'>Say Hii!!</li></a>
          <li onClick={(e) => handleButtonClick(e, '/portfolio/skills')} className='nav-button cursor-pointer hover-underline ml-2'>Skills</li>
          <li onClick={(e) => handleButtonClick(e, '/portfolio/feats')} className='cursor-pointer hover-underline ml-3'>Feats</li>
        </ul>
      </div>
    </div>
  );
}

export default MainPagePages;
