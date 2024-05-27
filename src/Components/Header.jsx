import React from "react";
import { FaBars } from "react-icons/fa";
const div = () => {
  return (
    <div >
      <div className="flex justify-between">
        <img src="./assets/ghost-solid.svg" className="hover:animate-bounce  w-12 h-10" alt="logo"/>
       
        <ul className="hidden lg:flex justify-between font-lato items-center gap-6">
          <li><a href="#">Plans</a></li>
          <li><a href="#">Find-Domain</a></li>
          <li><a href="#">Why Hosterr</a></li>
        </ul>
        <div className="hidden lg:flex justify-center items-center font-lato gap-6 ">
        <a href="#" className="font-lato  rounded-3xl px-4 py-3 bg-white text-black hover:bg-blue-600 hover:text-white  transition-all duration-500">Sign In</a>
        <button className="font-lato  rounded-3xl px-3 py-3 bg-black text-white hover:bg-blue-600  transition-all duration-500 ">Join Waitlist</button>
        </div>
        <div className="lg:hidden">
          <FaBars />
        </div>
        
      </div>
    </div>
  );
};

export default div;
