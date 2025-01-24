import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { RelatedProducts } from "../components/RelatedProducts";

export function Product() {
  const { id } = useParams();
  const { currency, products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const product = products.find(product => product._id === id);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      } else console.error("Product not found");
    };

    fetchData();
  }, [id, products]);

  return productData ? (
    <div className="border-t-2 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-scroll">
            {productData.image.map((item, index) => (
              <img
                src={item}
                onClick={() => setImage(item)}
                key={index}
                className="w-[24%] shrink-0 cursor-pointer sm:mb-3 sm:w-full"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-4/5">
            <img className="h-auto w-full" src={image} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 w-4/5 text-gray-500">{productData.description}</p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border bg-gray-100 px-4 py-2 ${item === size ? "border-orange-500" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={async () => await addToCart(productData._id, size)} 
            className="bg-black px-8 py-3 text-sm text-white active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
            <p>100% Original product</p>
            <p>Cash on delivery is available</p>
            <p>Easy exchange and return policy within 7 days</p>
          </div>
        </div>
      </div>
 
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
          <span className="font-semibold">Discover Your Style at FOREVER</span>
          <p>
            Explore a world of fashion where every piece is curated to bring out your best. Whether you're seeking the 
            latest trends or timeless classics, our collection offers something for every style and occasion.
          </p>
          <span className="font-semibold">Shop with Confidence</span>
          <p>
            At FOREVER, quality meets affordability. Enjoy a seamless shopping experience with products that are 
            designed to inspire, delivered right to your doorstep.
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subcategory={productData.subcategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
