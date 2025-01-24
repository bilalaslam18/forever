import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'PKR';
    const delivery_charges = 200;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [cartSize, setCartSize] = useState(0);
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if(!size) {
            toast.error('Select product size');
            return;
        }


        let cartData = structuredClone(cartItems);
      
        if (!cartData[itemId]) cartData[itemId] = {};

        if (cartData[itemId][size]) cartData[itemId][size] += 1;
        else cartData[itemId][size] = 1;
      
        setCartItems(cartData); setCartSize(prevSize => prevSize + 1);
    }

    const updateQuantity = async (item, size,  quantity) => {
        let cartData = structuredClone(cartItems);
        const newQuantity = Number(quantity);
        setCartSize(prev => (prev - cartData[item][size] + newQuantity))
        cartData[item][size] = newQuantity;
        setCartItems(cartData);
    }
     
    const getTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            let itemInfo = products.find((prod) => prod._id === item);
            for (const size in cartItems[item]) {
                if(cartItems[item][size] > 0) total += itemInfo.price * cartItems[item][size];
            }
        }
        return total;
    }

    const value = {
        products, currency, delivery_charges, search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, cartSize, setCartSize, updateQuantity, getTotal, navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;