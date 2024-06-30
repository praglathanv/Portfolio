import React, { forwardRef } from 'react';
import linkedinlogo from "/images/linkedinlogo.png";
import gmaillogo from "/images/gmaillogo.png";
import whatsapplogo from "/images/whatsapplogo.png";
import telegramlogo from "/images/twitterlogo2.png";

const LogoVertical = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="logo-vertical fixed z-[5] right-1 lg:right-3 top-20 h-[85vh] w-[60px]">
      <ul className='flex flex-col gap-y-10'>
        <a href="https://www.linkedin.com/in/pragalathanv07/">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[60px] mt-[-15px]' src={linkedinlogo} alt="" />
          </li>
        </a>
        <a  href="mailto:pragalathanv07@gmail.com">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[60px] mt-[-15px]' src={gmaillogo} alt="" />
          </li>
        </a>
        <a href="https://x.com/VPragalath28180">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[60px] mt-[-15px]' src={telegramlogo} alt="" />
          </li>
        </a>
        <a href="https://api.whatsapp.com/send?phone=917604931644">
          <li className='cursor-pointer hover:bg-white rounded-full'>
            <img className='h-[60px] mt-[-15px]' src={whatsapplogo} alt="" />
          </li>
        </a>
      </ul>
      <div className="mt-8 mx-auto h-[250px] w-[5px] bg-black"></div>
    </div>
  );
});

export default LogoVertical;
