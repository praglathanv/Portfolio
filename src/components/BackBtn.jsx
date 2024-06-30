import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BackBtn = () => {
  return (
    <div className="backbtn absolute top-[0.3rem] left-[50%] bg-white rounded-full text-4xl cursor-pointer">
      <Link to='/portfolio'><FaArrowCircleLeft /></Link>
  </div>
  )
}

export default BackBtn