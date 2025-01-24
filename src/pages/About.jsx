import React from 'react'
import { Title } from '../components/Title'
import { NewsLetterBox } from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

export function About() {
  return (
    <div>
      <div className='border-t pt-8 text-center text-2xl'>
        <Title title={'About'} subTitle={'Us'}/>
      </div>

      <div className='my-10 flex flex-col gap-16 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
            <p>Forever was born out of a passion for innovation and a desire to revloutionize the way people shop online. Our journey began with  a simple idea: to provide a platform where customers can easily discover, explore and purchase a wide range of products from their homes with comfort.</p>
            <p>Forever was born out of a passion for innovation and a desire to revloutionize the way people shop online. Our journey began with  a simple idea: to provide a platform where customers can easily discover, explore and purchase a wide range of products from their homes with comfort.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Forever was born out of a passion for innovation and a desire to revloutionize the way people shop online. Our journey began with  a simple idea: to provide a platform where customers can easily discover, explore and purchase a wide range of products from their homes with comfort.</p>
        </div>
      </div>

      <div className='py-4 text-xl'>
        <Title title={'Why'} subTitle={'Choose Us'}/>
      </div>

      <div className='mb-20 flex flex-col text-sm md:flex-row'>
          <div className='flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit reprehenderit adipisci voluptatum tempore porro asperiores nemo nulla dolorem autem, quod unde architecto animi deleniti natus sint facere excepturi quos!</p>
          </div>
          <div className='flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit reprehenderit adipisci voluptatum tempore porro asperiores nemo nulla dolorem autem, quod unde architecto animi deleniti natus sint facere excepturi quos!</p>
          </div>
          <div className='flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit reprehenderit adipisci voluptatum tempore porro asperiores nemo nulla dolorem autem, quod unde architecto animi deleniti natus sint facere excepturi quos!</p>
          </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}
