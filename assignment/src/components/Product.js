import React from 'react'
import tshirt1 from '../assets/tshirt1.png'


const Product = () => {
  return (
    <div className='flex w-full align-center mx-8 my-4'>
      <div className='flex justify-between align-center'>
      <div className='flex'>
        <div>
          <img src={tshirt1} alt="product1" className='w-[55px] rounded-3xl bg-gray-200 mt-2 mr-4' />
        </div>
        <div className='mt-[-6px]'>
            <p className='font-semibold mb-[-3px]'>T-Shirt</p>
            <p className='mb-2 font-semibold'>Summer vibes</p>
            <p className='text-slate-400 text-sm'>#1234567</p>
        </div>
        </div>
        <div>
        <div className="ml-20">
           <p className='font-medium'>$18.90</p>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Product