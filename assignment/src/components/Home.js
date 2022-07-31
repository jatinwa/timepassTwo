import React, { useEffect } from 'react'
import paypal from '../assets/paypal.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import maestro from '../assets/maestro.png'
import discover from '../assets/discover.png'
import ideal from '../assets/ideal.png'
import inpost from '../assets/inpost.png'
import dpd from '../assets/dpd.png'
import dhl from '../assets/dhl.png'
import fedex from '../assets/fedex.png'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Product from './Product';

const Home = () => {

  return (
    <div className=' h-full max-w-full my-8 md:mx-20 mx-2'>
        <div className='flex justify-between mb-10'>
              <div className='text-xl font-medium'>
                 Shopping Payment
              </div>
              <div className='flex md:mr-20'>
                 <ShoppingCartOutlinedIcon className='rounded-3xl border-2 border-green-300'/>
                 <p className='mt-[-8px] text-gray-200 mx-2'>__________</p>
                 <LocalShippingOutlinedIcon className='rounded-3xl bg-green-400 text-white'/>
              </div>
        </div>
        <div className='flex flex-wrap'>
           <div className='flex-none max-w-[600px]'>            
                <div className='flex'>
                  <button className='bg-green-500 lg-rounded px-6 py-2 rounded-3xl text-white mr-4 hover:bg-green-400'>LOG IN</button>
                    <button className='bg-white lg-rounded px-6 py-2 rounded-3xl text-green-500 border-2 border-gray-200 hover:bg-gray-100'>SIGN UP</button>
                </div>
                <div className='text-smx mt-8'>
                Shipping information
                </div>
                <div className='flex mt-6'>
                     <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3 py-2 rounded-3xl mr-4'>
                        <input type="email" placeholder='Email' className='outline-none text-sm' />
                     </div>
                     <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3 py-2 rounded-3xl'>
                        <input type="text" placeholder='Address' className='outline-none text-sm'/>
                     </div>
                </div>
                <div className='flex mt-4'>
                <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3 py-2 rounded-3xl mr-4'>
                        <input type="text" placeholder='First name' className='outline-none text-sm' />
                     </div>
                     <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3 py-2 rounded-3xl'>
                        <input type="text" placeholder='City' className='outline-none text-sm'/>
                     </div>
                </div>
                <div className='flex mt-4'>
                <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3  py-2 rounded-3xl mr-4'>
                        <input type="text" placeholder='Last name' className='outline-none text-sm' />
                     </div>
                     <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3  py-2 rounded-3xl'>
                        <input type="number" placeholder='Postal Code/Zip' className='outline-none text-sm'/>
                     </div>
                </div>
                <div className='flex mt-4'>
                <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3  py-2 rounded-3xl mr-4'>
                        <input type="number" placeholder='Phone numner' className='outline-none text-sm' />
                     </div>
                     <div className='border-2 border-gray-200 md:pl-4 md:pr-12 pl-2 pr-3  py-2 rounded-3xl'>
                        <input type="text" placeholder='Address' className='outline-none text-sm'/>
                     </div>
                </div>
           </div>
           <div className='flex-none max-w-[500px] md:mx-16 mx-2 text-smx my-8 md:my-4'>            
              <div>
                Payment method
              </div>
              <div className='mt-6'>
                <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 mr-2'>
                    <img src={paypal} alt='paypal' className='h-[35px] w-[80px]'/>
                </button>
                <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 '>
                    <img src={visa} alt='visa' className='h-[35px] w-[80px]'/>
                </button>
                <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 ml-2'>
                    <img src={mastercard} alt='mastercard' className='h-[35px] w-[80px]'/>
                </button>
              </div>
              <div className='mt-2'>
                <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 mr-2'>
                    <img src={maestro} alt="maestro" className='h-[35px] w-[80px]' />
                </button>
                <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 '>
                    <img src={discover} alt="discover" className='h-[35px] w-[80px]' />
                </button>
                <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 ml-2'>
                    <img src={ideal} alt="ideal" className='h-[35px] w-[80px]' />
                </button>
              </div>
              <div className='mt-6'>
                Delivery method
              </div>
              <div className='mb-2 mt-4'>
                 <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 mr-2'>
                  <div className='flex align-center justify-center'>
                  <img src={inpost} alt="inpost" className='h-[35px] w-[95px]' /> 
                  <p className='mt-1'>$20.00</p>
                  </div>
                 </button>
                 <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 mr-2'>
                 <div className='flex align-center justify-center'>
                  <img src={dpd} alt="dpd" className='h-[35px] w-[95px]' /> 
                  <p className='mt-1'>$12.00</p>
                  </div>
                 </button>
              </div>
              <div>
                 <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 mr-2'>
                 <div className='flex align-center justify-center'>
                  <img src={dhl} alt="dhl" className='h-[35px] w-[95px]' /> 
                  <p className='mt-1'>$15.00</p>
                  </div>
                 </button>
                 <button className='border-2 border-gray-200 rounded-2xl px-4 py-2 mr-2'>
                 <div className='flex align-center justify-center'>
                  <img src={fedex} alt="fedex" className='h-[35px] w-[95px]' /> 
                  <p className='mt-1'>$10.00</p>
                  </div>
                 </button>
              </div>
           </div>
           <div className='flex-none max-w-[500px] mt-3'>            
              <div className='md:ml-8'>
               Your cart
              </div>
              <div>
                 <Product/>
                 <Product/>
              </div>
              <div className='flex justify-between max-w-[300px] bg-gray-100 px-4 mt-8 rounded-3xl ml-10'>
                <p className='py-4 pl-6 text-slate-500 text-lg'>Total Cost</p>
                <p className='py-4 pr-6 text-lg'>$159,98</p>
              </div>
              <div className='flex ml-16 md:mt-10 mt-4 align-center'>
                 <div className='mt-4'>
                  <LocalShippingOutlinedIcon className='text-gray-600'/>
                 </div>
                 <div className='ml-4 mt-2'>
                   <p className='text-[12px] text-gray-700'>You are $30,02 away<br/>
                   from free shipping!</p>
                 </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Home