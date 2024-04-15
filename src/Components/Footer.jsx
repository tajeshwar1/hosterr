import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='flex flex-col gap-12 mt-16 md:flex-row md:justify-between lg:mt-28    '>
      <ul className='flex gap-6 font-lato text-gray-600'>
        <li>
          <div className='animate-bounce'>
          <FaFacebook />
        </div>
          <a href="#" className='hover:font-bold'>FaceBook  </a>
        </li>
        <li>
          <div className='animate-bounce'>
          <FaInstagramSquare />
          </div>
          <a href="#"className='hover:font-bold'>Instagram </a>
        </li>
        <li>
          <div className='animate-bounce'>
          <FaXTwitter />
          </div>
          <a href="#"className='hover:font-bold'>Twitter</a>
        </li>
      </ul>
      <div className='flex gap-3'>
        <img src="./assets/people44.jpg" className='w-16 h-16 rounded-full bg-cover object-cover' alt="" />
        <div>
          <p className='font-playfair font-medium'>Have any questions?</p>
          <a href="#" className='font-lato font-medium hover:font-bold' >Talk to a Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer