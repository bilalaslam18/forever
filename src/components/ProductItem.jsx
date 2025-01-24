import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="cursor-pointer text-gray-700">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="transition ease-in-out hover:scale-110"
          alt=""
        />
      </div>
      <p className="pb-1 pt-3 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency} {price}
      </p>
    </Link>
  );
}
