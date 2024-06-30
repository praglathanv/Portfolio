import React from 'react';

const BackEnd = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-center text-xl text-white font-bold py-2 inner">Back-End</div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Core :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>Node JS ,</li>
          <li>Python ,</li>
          <li>PHP ,</li>
          <li>Ruby</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Frameworks :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>Express JS ,</li>
          <li>Django ,</li>
          <li>Flask ,</li>
          <li>Laravel</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Database :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>MongoDB ,</li>
          <li>SQL ,</li>
          <li>Oracle ,</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Authentication :</h1>
        <ul className='core text-white text-sm px-4 ml-3 flex inner'>
          <li>JWT Auth ,</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div>
        <h1 className='text-white font-semibold px-4 py-2 inner'>Others :</h1>
        <ul className='core text-white text-sm px-4 ml-3 inner'>
          <li>Razorpay ,</li>
          <li>Paytm</li>
        </ul>
      </div>
    </div>
  );
};

export default BackEnd;
