import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from './Title';

export function CartTotal() {
    const {currency, delivery_charges, getTotal} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title title={'Cart'} subTitle={'Total'}/>
        </div>

        <div className='mt-2 flex flex-col gap-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getTotal()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_charges}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getTotal() === 0 ? 0 : getTotal() + delivery_charges}.00</b>
            </div>
        </div>
    </div>
  )
}
