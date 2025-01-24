import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from './Title';
import { ProductItem } from './ProductItem';

export function LatestCollection() {
    
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [setLatestProducts, products])

  return (
    <div className='my-10'>
        <div className='py-8 text-center text-3xl'>
            <Title title={'LATEST'} subTitle={'COLLECTIONS'}/>
            <p className='m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, saepe. Assumenda illo vero optio fugiat iusto soluta perspiciatis ducimus nostrum non repellendus repellat repudiandae ab commodi, ea velit libero sunt.
            </p>
        </div>

        <div className='grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {latestProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}
