"use client";

import ProductCardProps from '@/app/interfaces/ProductCardProps';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { RiHeartFill } from 'react-icons/ri';


const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    labelColor,
    title,
    price,
    timeDay,
    timeHours,
    timeMins,
    imgLabel
}) => {

    const [isClicked, setIsClicked] = useState(true);

    return (
        <div className="rounded-lg flex justify-between px-10 my-6">
            <div className='flex'>
                <div className="relative">
                    {/* Hidden favorite */}
                    <div className='absolute top-3 left-3 self-start lg:hidden flex'>
                        <button className="text-red-500 bg-white rounded-full p-1" onClick={() => setIsClicked(!isClicked)}>
                            {isClicked ? <BiHeart className="text-black h-5 w-5" /> : <RiHeartFill className="h-5 w-5" />}
                        </button>
                    </div>

                    <Image src={imageUrl} alt="Product" className="rounded-3xl" height={150} width={150} />

                    <div
                        className="absolute text-center bottom-0 right-0 py-3 px-2 w-3/4 bg-opacity-75 rounded-tl-3xl border rounded-br-3xl"
                        style={{ backgroundColor: labelColor }}
                    >
                        <span className="text-white text-xs">{imgLabel}</span>
                    </div>
                </div>
                <div className="px-4 flex flex-col justify-evenly">
                    <h3 className="text-xl font-normal overflow-ellipsis">{title}</h3>
                    <p className="text-gray-400">Starting price <span className='font-bold text-black text-2xl'>{price} EGP</span></p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className='text-gray-400'>Lot starts in</div>
                            <button className="px-4 py-2 rounded-2xl text-orange-400 font-bold bg-orange-100">{timeDay} Days</button>
                            <button className="px-4 py-2 rounded-2xl text-orange-400 font-bold bg-orange-100">{timeHours} Hours</button>
                            <button className="px-4 py-2 rounded-2xl text-orange-400 font-bold bg-orange-100">{timeMins} Minutes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='self-start hidden xl:flex'>
                <button className="text-red-500" onClick={() => setIsClicked(!isClicked)}>
                    {isClicked ? <BiHeart className="h-6 w-6" /> : <RiHeartFill className="h-6 w-6" />}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
