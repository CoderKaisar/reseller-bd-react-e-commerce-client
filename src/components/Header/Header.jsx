import React from 'react';
import logo from "../../assets/images/Logo.png"
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-red-300 to-green-600 text-white'>
            <div className='flex justify-between items-center mx-6'>
                <div className='flex justify-between items-center py-4'>
                    <img className='w-28 h-18 mr-20 rounded-full' src={logo} alt="" />
                    <nav>
                        <Link className='mr-10'>Home</Link>
                        <Link className='mr-10'>Shop</Link>
                        <Link className='mr-10'>Blog</Link>
                        <Link className='mr-10'>Page</Link>
                        <Link className='mr-10'>About</Link>
                        <Link className='mr-10'>Contact</Link>
                    </nav>
                </div>
                <div>
                    <nav className='flex justify-around items-center gap-6 mr-10'>
                        <span><CiSearch className='text-xl font-bold' /></span>
                        <span><CiUser className='text-xl  font-bold' /></span>
                        <span><CiHeart className='text-xl font-bold' /></span>
                        <span><CiShoppingCart className='text-xl  font-bold' /></span>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;