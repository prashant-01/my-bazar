import React from 'react'
import { cartImg, logoDark, pexelsCart } from '../assets/index'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const userInfo = useSelector((state) => state.cart.userInfo);
    console.log(userInfo)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full flex items-center justify-between mx-auto'>
            <div>
                <NavLink to='/'>
                    <img src={logoDark} alt=''/>
                </NavLink>
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-4 decoration-[1px] cursor-pointer'>Home</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-4 decoration-[1px] cursor-pointer'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-4 decoration-[1px] cursor-pointer'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-4 decoration-[1px] cursor-pointer'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-4 decoration-[1px] cursor-pointer'>Blog</li>
                </ul>
                <div className='relative'>
                    <Link to='/cart'>
                        <img className='w-6' src={cartImg} alt=''/>
                        <span className='absolute w-6 top-2 left-0 text-sm 
                        flex items-center justify-center font-semibold'>{ cartItems.length }</span>
                    </Link>
                </div>
                <div>
                    <Link to='/login'>
                        <img className='w-8 h-8 rounded-full' 
                        src={userInfo ? userInfo.image : pexelsCart} alt=''/>
                    </Link>
                </div>
                <div>
                {
                    userInfo && <p className='text-base text-black font-semibold hover:text-orange-900
                    hover:underline underline-offset-4 decoration-[1px] cursor-pointer'>{ userInfo.name }</p>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header