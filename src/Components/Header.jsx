import React from "react";
import { FaBars } from "react-icons/fa";
const div = () => {
  return (
    <div >
      <div className="flex justify-between">
        <div className="flex">
        <img src="./assets/ghost-solid.svg" className=" w-10 h-12  hover:animate-bounce cursor-pointer" alt="logo"/>
       <div><h1 className=" sm:text-2xl  font-bold md:text-4xl font-playfair ml-4 cursor-pointer">HT</h1></div>
       </div>
        <ul className="font-medium   hidden lg:flex justify-between font-lato items-center gap-6">
          <li><a className="hover:underline " href="#">Plans</a></li>
          <li><a className="hover:underline " href="#">Find-Domain</a></li>
          <li><a className="hover:underline " href="#">Why Hosterr</a></li>
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
