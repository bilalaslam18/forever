import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from '../components/Title';
import { assets } from '../assets/assets';
import { CartTotal } from '../components/CartTotal';

export function Cart() {
  const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    let tempData = [];
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItems[item][size]
          })
        }
      }
    }

    setCartData(tempData);
  }, [cartItems])
  return (
    <div className='border-t pt-14'>
      <div className='mb-3 text-2xl'>
        <Title title={'Your'} subTitle={'Cart'}/>
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((prod) => prod._id === item._id);
            return (
              <div key={index} className='grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-y py-14 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs font-medium sm:text-lg'>{productData.name}</p>
                    <div className='mt-2 flex items-center gap-5'>
                      <p>{currency} {productData.price}</p>
                      <p className='border bg-slate-50 px-2 sm:px-3 sm:py-1'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={async (e) => (e.target.value === '' || e.target.value === '0') ? null : await updateQuantity(item._id, item.size, e.target.value)}
                  className='max-w-10 border p-1 sm:max-w-20 sm:px-2'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img onClick={async () => await updateQuantity(item._id, item.size, 0)} className='mr-4 w-4 cursor-pointer sm:w-5' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='my-20 flex justify-end'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='my-8 bg-black px-8 py-3 text-sm text-white'>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
