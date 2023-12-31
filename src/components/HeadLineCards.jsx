import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1350px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* cards */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'  />
      </div>
      {/* cards */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'  />
      </div>
      {/* cards */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'  />
      </div>
     
   
    </div>
  )
}

export default HeadLineCards
