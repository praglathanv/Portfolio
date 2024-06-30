import React from 'react';

const FrontEnd = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-center text-xl text-white font-bold py-2 inner">Front-End</div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Core :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>HTML ,</li>
          <li>CSS ,</li>
          <li>JavaScript ,</li>
          <li>TypeScript</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Frameworks :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>React JS ,</li>
          <li>Next JS ,</li>
          <li>Angular JS ,</li>
          <li>Vue JS ,</li>
          <li>Three JS</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Styling & Animation :</h1>
        <ul className='core text-white text-sm px-4 ml-3 inner'>
          <li>Tailwind CSS ,</li>
          <li>Bootstrap ,</li>
          <li>Scss ,</li>
          <li>Material UI ,</li>
          <li>Gsap animations</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>State managers :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>Redux JS</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Others :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>Git ,</li>
          <li>GitHub ,</li>
          <li>Npm</li>
        </ul>
      </div>
    </div>
  );
};

export default FrontEnd;
