import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Title } from "../components/Title";
import { ProductItem } from "../components/ProductItem";

export function Collections() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("featured");

  const toggleCategory = (event) => {
    const value = event.target.value;
    if (category.includes(value))
      setCategory((prev) => prev.filter((item) => item !== value));
    else setCategory((prev) => [...prev, value]);
  };

  const toggleSubCategory = (event) => {
    const value = event.target.value;
    if (subCategory.includes(value))
      setSubCategory((prev) => prev.filter((item) => item !== value));
    else setSubCategory((prev) => [...prev, value]);
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search)
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    if (category.length > 0)
      productsCopy = products.filter((item) =>
        category.includes(item.category),
      );
    if (subCategory.length > 0)
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    setListProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = listProducts.slice();
    switch (sortType) {
      case "low-high":
        setListProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setListProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory, search, showSearch]);
  useEffect(() => {
    sortProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <div className="flex flex-col gap-1 border-t pt-10 sm:flex-row sm:gap-10">
      <div className="sticky min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 flex cursor-pointer items-center gap-2 text-xl"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilter ? "" : "hidden sm:block"}`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 cursor-pointer rounded-sm border-gray-300 focus:outline-none focus:ring-0"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 cursor-pointer rounded-sm border-gray-300 focus:outline-none focus:ring-0"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 cursor-pointer rounded-sm border-gray-300 focus:outline-none focus:ring-0"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* subcategory */}
        <div
          className={`my-5 border border-gray-300 py-3 pl-5 ${showFilter ? "" : "hidden sm:block"}`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 cursor-pointer rounded-sm border-gray-300 focus:outline-none focus:ring-0"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 cursor-pointer rounded-sm border-gray-300 focus:outline-none focus:ring-0"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 cursor-pointer rounded-sm border-gray-300 focus:outline-none focus:ring-0"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-4 flex justify-between text-base sm:text-2xl">
          <Title title={"ALL"} subTitle={"COLLECTIONS"} />

          <select
            onChange={(event) => setSortType(event.target.value)}
            className="border-2 border-gray-300 px-2 text-sm focus:border-gray-300 focus:outline-none focus:ring-0"
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price, low to high</option>
            <option value="high-low">Price, high to low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
          {listProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
