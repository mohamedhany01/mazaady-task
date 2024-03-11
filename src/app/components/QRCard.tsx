"use client";

import React, { useState } from 'react';
import QRCardProps from '../interfaces/QRCardProps';
import { HiOutlineDocumentDownload, HiOutlineEye } from 'react-icons/hi';
import { TbShare } from 'react-icons/tb';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import staticMazaady from "../../../public/mazaady.png";
import qr from "../../../public/qr.png";
import Image from 'next/image';



const QRCard: React.FC<QRCardProps> = ({
    title,
    alertMessage,
    avatarName
}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="rounded-2xl bg-white p-6">
            <div className="p-4 cursor-pointer flex justify-between" onClick={() => setIsExpanded(!isExpanded)}>
                <h3 className="text-xl font-bold">{title}</h3>
                <div className='flex gap-3'>
                    <button>
                        <HiOutlineEye size={25} />
                    </button>
                    <button>
                        <TbShare size={25} />
                    </button>
                    <button>
                        <HiOutlineDocumentDownload size={25} />
                    </button>
                    <button id='toggle-qr'>
                        {isExpanded ? <IoIosArrowDropupCircle size={25} /> : <IoIosArrowDropdownCircle size={25} />}
                    </button>
                </div>

            </div>
            {isExpanded && (
                <div className="bg-orange-100 p-4 flex items-center rounded-2xl mb-4">
                    <div className='mr-2'>
                        <HiOutlineDocumentDownload className='text-orange-400' size={25} />
                    </div>
                    <div>
                        <p className="text-black">{alertMessage}</p>
                    </div>
                </div>
            )}
            {isExpanded && (
                <div className="p-4 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl flex justify-center">
                    <div className='bg-white rounded-2xl text-center py-4 px-6 w-full'>
                        <div>
                            <Image src={staticMazaady} alt="Mazaady" className='m-auto' width={152} />
                        </div>
                        <div className='text-xl font-bold mt-2'>
                            {avatarName}
                        </div>
                        <div>
                            <Image src={qr} alt="QR code" className='m-auto' width={135} priority={true} />
                        </div>
                        <div className='text-sm'>
                            Follow Us on Mazaady
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QRCard;
