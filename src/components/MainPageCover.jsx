import React from 'react';
import eagle from "/images/eagle.png";
import avtar from "/images/Avtar.png";

const MainPageCover = ({ textRef }) => {
  return (
    <div className="cover gradient-bg h-[80vh] w-[80%] lg:w-[87%] z-[4] absolute top-[10%]">
      <img className='h-[80px] absolute right-[1rem]' src={eagle} alt="" />
      <div className="relative bg-black">
        <div className="cover-empty absolute flex h-[380px] w-[80%] lg:w-[90%] border-[3px] rounded-3xl top-[4rem] border-black ">
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-center">
            <div className="cover-elements">
              <h2 className='text-white text-2xl lg:text-3xl mt-12'>Full-Stack Developer</h2>
              <h4 className='text-white mt-24 typing' ref={textRef}></h4>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <img className='cover-elements h-[370px] w-[400px] mt-2' src={avtar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageCover;
