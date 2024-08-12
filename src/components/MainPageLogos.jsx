import React from 'react';
import linkedinlogo from "/images/linkedinlogo.png";
import gmaillogo from "/images/gmaillogo.png";
import whatsapplogo from "/images/whatsapplogo.png";
import telegramlogo from "/images/twitterlogo2.png";

const MainPageLogos = () => {
  return (
    <div className="main-logos flex absolute w-[100%] top-[36rem] left-[2rem] lg:left-[7rem] z-[15] " style={{ opacity: 0, transform: 'translateY(-50px)', visibility: 'hidden' }}>
      <div className="border-b-4 border-black h-[1px] w-[20%] lg:w-[50%]"></div>
      <ul className='pl-5 mt-[-10px] flex gap-x-5'>
        <a href="https://www.linkedin.com/in/pragalathanv07/">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[40px] md:h-[60px] mt-[-15px]' src={linkedinlogo} alt="" />
          </li>
        </a>
        <a href="mailto:pragalathanv07@gmail.com">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[40px] md:h-[60px] mt-[-15px]' src={gmaillogo} alt="" />
          </li>
        </a>
        <a href="https://x.com/VPragalath28180">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[45px] md:h-[65px] mt-[-15px]' src={telegramlogo} alt="" />
          </li>
        </a>
        <a href="https://api.whatsapp.com/send?phone=917604931644">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[40px] md:h-[60px] mt-[-15px]' src={whatsapplogo} alt="" />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default MainPageLogos;
