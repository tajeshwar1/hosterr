import React from 'react'

const Body = () => {
  return (
    <div>
    <div className='space-y-4 lg:flex lg:mt-5 mb-0'>
      
        <div className='flex items-center justify-center lg:flex-1 lg:order-2' >
          <img src="./assets/a3.png" className='bg-center w-72 h-72 top-60 mt-14 bg-contain rounded-xl shadow-8xl lg:h-[400px] lg:w-[400px] hover:scale-110 transition-all duration-300' alt="" />
        </div>
     <div className=' lg:flex-1 lg:order-1'>
      <h1 className='text-5xl font-bold font-playfair leading-tight mt-20'>Host your website in less than 5 mins*</h1>
      <p className='font-lato text-gray-700'>With hosterr, get your website up and running in no less than 5 mins* with 100 GB of free cloud storage if you pre-register</p>
     
      <form action="" className='flex flex-col gap-4 placeholder:text-gray-600 my-2 md:flex-row '>
        <input required className='rounded-2xl px-4 py-3' type="email" placeholder='enter email address'/>
        <button className='font-lato font-medium rounded-3xl px-4 py-3 bg-black text-white hover:bg-blue-600  transition-all duration-500 '>join waitlist</button>
        </form>
        <div className='flex mt-5'>
     <img src="./assets/check.svg" className='flex  w-6 h-6' alt="" />
      <p className='font-lato text-gray-600 ml-3'>No spam ever, Do Unsubscribe anytime.</p>
     </div>
     
      
     </div>
    </div>
    
     
    </div>
  )
}

export default Body
