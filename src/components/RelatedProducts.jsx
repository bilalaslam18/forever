import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from '../components/Title';
import { ProductItem } from '../components/ProductItem';

export function RelatedProducts({category, subcategory}) {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if(products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => (item.category === category && item.subcategory === subcategory));
            setRelated(productsCopy.slice(0,5));
        }
    }, [products, category, subcategory]);

  return (
    <div className='my-24'>
        <div className='py-2 text-center text-3xl'>
            <Title title={'RELATED'} subTitle={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {related.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))}
        </div>
    </div>
  )
}
