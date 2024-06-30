import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center text-white bg-black '>
      <div>
        <h1 className='text-4xl '>Error 404 page not found!!</h1>
        <Link to='/portfolio'><p className='text-center m-3 cursor-pointer text-xl underline'>visit our homepage</p></Link> 
      </div>
    </div>
  )
}

export default Page404