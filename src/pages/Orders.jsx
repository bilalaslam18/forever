import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from '../components/Title';

export function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title title={'My'} subTitle={'Orders'}/>
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='flex flex-col gap-4 border-y py-4 text-gray-700 md:flex-row md:items-center md:justify-between'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='font-medium sm:text-base'>{item.name}</p>
                  <div className='mt-2 flex items-center gap-3 text-base text-gray-700'>
                    <p className='text-lg'>{currency} {item.price}</p>
                    <p>Quantity: 2</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>25 July, 2024</span></p>
                </div>
              </div>
              <div className='flex justify-between md:w-1/2'>
                <div className='flex items-center gap-2'>
                  <p className='h-2 min-w-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='rounded-sm border px-4 py-2 text-sm font-medium'>Track order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
