import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export function Navbar() {
    const {showSearch, setShowSearch, cartSize } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>
            <img src={assets.logo} className='w-36' alt="" />
        </Link>

        <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>

                <p>Home</p>
                <hr className='hidden h-[1.5px] w-2/4 border-none bg-gray-700'/>
            </NavLink>
            <NavLink to='/collections' className='flex flex-col items-center gap-1'>

                <p>COLLECTIONS</p>
                <hr className='hidden h-[1.5px] w-2/4 border-none bg-gray-700'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>

                <p>ABOUT US</p>
                <hr className='hidden h-[1.5px] w-2/4 border-none bg-gray-700'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>

                <p>CONTACT US</p>
                <hr className='hidden h-[1.5px] w-2/4 border-none bg-gray-700'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className="group relative">
                <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                <div className='absolute right-0 hidden pt-4 group-hover:block'>
                    <div className='flex w-36 flex-col gap-2 rounded bg-slate-100 px-5 py-3 text-gray-500'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>

                </div>
            </div>
            <Link to='/cart' className='relative' >
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute bottom-[-5px] right-[-5px] aspect-square w-4 rounded-full bg-black text-center text-[8px] leading-4 text-white'>{cartSize}</p>
            </Link>
            <img src={assets.menu_icon} onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        
        {/* sidebar for smaller screens */}

        <div className={`absolute inset-y-0 right-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={() => setVisible(false)} className="flex cursor-pointer items-center gap-4 p-3">
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='border py-2 pl-6' to='/'>Home</NavLink>
                <NavLink onClick={() => setVisible(false)} className='border py-2 pl-6' to='/collections'>COLLECTIONS</NavLink>
                <NavLink onClick={() => setVisible(false)} className='border py-2 pl-6' to='/about'>ABOUT US</NavLink>
                <NavLink onClick={() => setVisible(false)} className='border py-2 pl-6' to='/contact'>CONTACT US</NavLink>
            </div>
        </div>
    </div>
  )
}
