import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from './Title';
import { ProductItem } from './ProductItem';

export function BestSellers() {

    const {products} = useContext(ShopContext);
    const [bestsellers, setBestsellers] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter(item => item.bestseller);
        setBestsellers(bestProducts.slice(0, 5));
    }, [setBestsellers, products]);

  return (
    <div className='my-10'>
        <div className='py-8 text-center text-3xl'>
            <Title title={'BEST'} subTitle={'SELLERS'}/>
            <p className='m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ab, accusantium cum excepturi impedit vero non, fugit tempora, repellendus voluptatibus cumque iure dolores iusto quasi ex? Sint accusamus voluptatem maxime?
            </p>
        </div>

        <div className='grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            { bestsellers.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}