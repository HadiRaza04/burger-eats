import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import Cart from './Cart'

function Navbar() {
    const [nav, setNav] = useState(false);
    const [cart, setCart] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
        {/* Left Side */}
        <div className='flex items-center'>
            <div  onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={ 30 }/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:4xl'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
                <p>Pickup</p>
            </div>
        </div>
        {/* Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={ 25 }/>
            <input type="text" placeholder='Search foods' className='bg-transparent p-2 w-full focus:outline-none'/>
        </div>
        {/* Cart Button */}
        <button className='bg-black text-white hidden md:flex items-center rounded-full' onClick={() => setCart(!cart)}>
            <BsFillCartFill size={ 20 } className='mr-2'/> Cart
        </button>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div onClick={() => setNav(!nav)} className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        {cart ? <div onClick={() => setCart(!cart)} className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
            <Cart />
        </div> : ''}
        {/* Side drawer menu */}
        <div className={nav ? 'bg-white w-[300px] top-0 left-0 fixed h-screen z-10 duration-200' : 'bg-white w-[300px] top-0 left-[-100%] fixed h-screen z-10 duration-200'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={ 30 } className='absolute top-4 right-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={ 25 } className='mr-4'/> Orders</li>
                    <li className='text-xl py-4 flex'><MdFavorite  size={ 25 } className='mr-4'/> Favorite</li>
                    <li className='text-xl py-4 flex'><MdHelp size={ 25 } className='mr-4'/> Help</li>
                    <li className='text-xl py-4 flex'><AiFillTag size={ 25 } className='mr-4'/> Promotions</li>
                    <li className='text-xl py-4 flex'><BsFillSaveFill size={ 25 } className='mr-4'/> Best Ones</li>
                    <li className='text-xl py-4 flex'><FaUserFriends size={ 25 } className='mr-4'/> Invite Friends</li>
                    <li className='text-xl py-4 flex'><FaWallet size={ 25 } className='mr-4'/>
                     Wallet
                    </li>
                    <li className='text-xl py-4 flex' onClick={() => setCart(!cart)}>
                        {/* <button className='bg-black text-white hidden md:flex items-center rounded-full' onClick={() => setCart(!cart)}> */}
                            <BsFillCartFill size={ 20 }  className='mr-4'/> Cart
                        {/* </button> */}
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
export default Navbar