import React from 'react'

export function Title({title, subTitle}) {
  return (
    <div className='mb-3 inline-flex items-center gap-2'>
        <p className='text-gray-500'>{title} <span className='font-medium text-gray-700'>{subTitle}</span></p>
    </div>
  )
}
