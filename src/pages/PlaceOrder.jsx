import React, { useContext, useState } from 'react'
import { Title } from '../components/Title'
import { CartTotal } from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

export function PlaceOrder() {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);
  return (
    <div className='flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14'>
      <div className='flex w-full flex-col gap-4 sm:max-w-[480px]'>
        <div className='my-3 text-xl sm:text-2xl'>
          <Title title={'Delivery'} subTitle={'Information'} />
        </div>
        <div className='flex gap-3'>
          <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='First name' type="text" />
          <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='Last name' type="text" />
        </div>
        <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='Email address' type="email" />
        <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='Street' type="text" />
        <div className='flex gap-3'>
          <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='City' type="text" />
          <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='Stata' type="text" />
        </div>
        <div className='flex gap-3'>
          <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='Postal code' type="text" />
          <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='Country' type="text" />
        </div>
        <input className='w-full rounded border border-gray-300 px-3.5 py-1.5 focus:border-gray-300 focus:ring-0' placeholder='Phone' type="text" />
      </div>

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title title={'Payment'} subTitle={'Method'}/>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex cursor-pointer items-center gap-3 border p-2 px-3'>
              <p className={`h-3.5 min-w-3.5 rounded-full border ${method === 'stripe' ? 'bg-green-400' : '' }`}></p>
              <img className='mx-4 h-5' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex cursor-pointer items-center gap-3 border p-2 px-3'>
              <p className={`h-3.5 min-w-3.5 rounded-full border ${method === 'razorpay' ? 'bg-green-400' : '' }`}></p>
              <img className='mx-4 h-5' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex cursor-pointer items-center gap-3 border p-2 px-3'>
              <p className={`h-3.5 min-w-3.5 rounded-full border ${method === 'cod' ? 'bg-green-400' : '' }`}></p>
              <p className='mx-4 text-sm font-medium text-gray-500'>Cash on delivery</p>
            </div>
          </div>
          <div className='mt-8 w-full text-end'>
            <button onClick={() => navigate('/orders')} className='bg-black px-16 py-3 text-sm text-white'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}
