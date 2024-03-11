
import React from 'react';
import { FaUserFriends, FaUsers } from 'react-icons/fa';
import Button from './Button';
import AvatarCardProps from '../interfaces/AvatarCardProps';
import { BiStar } from 'react-icons/bi';
import Image from 'next/image';

const AvatarCard: React.FC<AvatarCardProps> = ({
    imageUrl,
    name,
    description,
    followingCount,
    followersCount,
    rateCount,
    ratePeopleCount
}) => {
    return (
        <div className="rounded-2xl bg-white p-6">
            <div className="relative">
                <Image src={imageUrl} alt="Avatar" className="object-cover rounded-3xl" width={150} height={150} />
            </div>
            <div className="py-4">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">{description}</p>
                <div className="flex items-center justify-evenly">
                    <div className="flex lg:items-center justify-evenly w-full">
                        <div className="flex items-center mr-4 py-2 lg:px-3 px-5 rounded-2xl text-orange-400 font-bold bg-orange-100">
                            <div className='flex items-center gap-1'>
                                <FaUserFriends size={24} className="mr-1" />
                                <div className='flex flex-col'>
                                    <span className='text-sm font-bold text-black'>{followingCount}</span>
                                    <span className='text-sm font-normal'>Following</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mr-4 py-2 lg:px-3 px-5 rounded-2xl text-orange-400 font-bold bg-orange-100">
                            <div className='flex items-center gap-1'>
                                <FaUsers size={24} className="mr-1" />
                                <div className='flex flex-col'>
                                    <span className='text-sm font-bold text-black'>{followersCount}</span>
                                    <span className='text-sm font-normal'>Following</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mr-4 py-2 lg:px-3 px-5 rounded-2xl text-orange-400 font-bold bg-orange-100">
                            <div className='flex items-center gap-1'>
                                <BiStar size={24} className="mr-1" />
                                <div className='flex flex-col'>
                                    <div className='text-sm font-bold text-black flex'>{rateCount} <span className='text-gray-400 font-light text-xs'>({ratePeopleCount})</span></div>
                                    <span className='text-sm font-normal'>Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button>
                Follow
            </Button>
        </div>
    );
};

export default AvatarCard;
