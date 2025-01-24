import React from 'react'
import { Title } from '../components/Title'
import { assets } from '../assets/assets'
import { NewsLetterBox } from '../components/NewsLetterBox'

export function Contact() {
  return (
    <div>
      <div className='border-t pt-10 text-center text-2xl'>
        <Title title={'Contact'} subTitle={'Us'}/>
      </div>

      <div className='my-10 mb-28 flex flex-col justify-center gap-10 md:flex-row'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500'>DHA Phase-3 Y-Block<br />54000, Lahore, Pakistan</p>
          <p className='text-gray-500'>Phone: +92 325 1097017 <br />Email: aslammbilal61@gmail.com</p>
          <p className='text-xl font-semibold text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm transition-all duration-500 hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}
