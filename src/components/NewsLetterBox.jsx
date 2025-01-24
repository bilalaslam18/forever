import React from 'react'

export function NewsLetterBox() {
    const submitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-3 text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <form onSubmit={submitHandler} className='mx-auto my-6 flex w-full items-center gap-3 border pl-3 sm:w-1/2'>
            <input className='w-full border-none invalid:text-red-500 focus:ring-0 sm:flex-1' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black px-10 py-4 text-xs text-white'>SUBSCRIBE</button>
        </form>
    </div>
  )
}
