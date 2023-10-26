import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl'>The <span className='text-orange-400'>Best</span></h1>
            <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl'> <span className='text-orange-400'>Foods</span> Delivered</h2>
        </div>
        <img src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full max-h-[500px] object-cover ' />
      </div>
    </div>
  )
}

export default Hero
