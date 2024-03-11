"use client";

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import staticMazaady from "../../../public/mazaady.png";
import { CiBellOn, CiSearch } from 'react-icons/ci';
import AddButton from './AddButton';
import { IoIosMenu } from 'react-icons/io';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white py-4">
            <div className="default-wrapper px-4 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-4 lg:hidden">
                        <button onClick={toggleMenu}>
                            <IoIosMenu size={24} />
                        </button>
                    </div>
                    <Image src={staticMazaady} alt="Logo" className="h-8 mr-4" />
                    <div className="hidden lg:flex">
                        <a href="#" className="mx-5 relative text-transparent bg-clip-text font-bold bg-gradient-to-r from-red-600 to-yellow-500">
                            Home
                            <span className="absolute left-0 top-10 w-full h-2 bg-gradient-to-r from-red-600 to-yellow-500 rounded-tr-md rounded-tl-md"></span>
                        </a>
                        <a href="#" className="mx-5 relative text-gray-500">
                            Blog
                            <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-red-600 to-yellow-500 w-full transform scale-x-0 transition-transform"></span>
                        </a>
                        <a href="#" className="mx-5 relative text-gray-500">
                            Gifts
                            <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-red-600 to-yellow-500 w-full transform scale-x-0 transition-transform"></span>
                        </a>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <CiSearch size={24} />
                        <div className="border-r border-orange-200 h-6 mx-4 hidden lg:flex" />
                        <CiBellOn size={24} className='mx-6 lg:mx-0' />
                        <div className="border-r border-orange-200 h-6 mx-4 hidden lg:flex" />
                        <Image src={"https://placehold.co/150x150"} width={32} height={32} alt='Avatar' className='rounded-full' />
                    </div>
                    <div className="flex items-center">
                        <div className="lg:hidden">
                            <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute z-50 top-12 left-0 bg-white w-full py-2`}>
                                <a href="#" className="block text-transparent bg-clip-text font-bold bg-gradient-to-r from-red-600 to-yellow-500 text-center py-2">Home</a>
                                <a href="#" className="block text-center py-2">Blog</a>
                                <a href="#" className="block text-center py-2">Gifts</a>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center">
                            <AddButton>
                                Add New Product
                            </AddButton>
                            <div className="flex items-center">
                                <FiGlobe size={24} className="mr-2" />
                                <div className="border-r border-orange-200 h-6 mx-4" />
                                <span className='font-bold'>EN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


