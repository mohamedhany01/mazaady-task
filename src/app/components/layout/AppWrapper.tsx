import React from 'react';
import ProductList from '../ProductList/ProductList';
import ProductCardProps from '@/app/interfaces/ProductCardProps';
import AvatarCard from '../AvatarCard';
import AvatarCardProps from '@/app/interfaces/AvatarCardProps';
import QRCard from '../QRCard';
import QRCardProps from '@/app/interfaces/QRCardProps';
import Navbar from '../Navbar';

const fakeProducts: ProductCardProps[] = [
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Live Auction',
        labelColor: 'red',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Hot Sale',
        labelColor: 'orange',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Live Auction',
        labelColor: 'red',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Hot Sale',
        labelColor: 'orange',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Live Auction',
        labelColor: 'red',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Hot Sale',
        labelColor: 'orange',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Live Auction',
        labelColor: 'red',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Hot Sale',
        labelColor: 'orange',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Live Auction',
        labelColor: 'red',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Hot Sale',
        labelColor: 'orange',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Live Auction',
        labelColor: 'red',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },
    {
        imageUrl: 'https://placehold.co/150x150',
        imgLabel: 'Hot Sale',
        labelColor: 'orange',
        title: 'Six-piece clothing set (blouse - pants - hat and ...',
        price: 1000,
        timeDay: 10,
        timeHours: 12,
        timeMins: 50
    },

];

const fakeAvatar: AvatarCardProps = {
    imageUrl: `https://placehold.co/150x150`,
    name: `Hala Ahmed`,
    description: `I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.`,
    followingCount: 5,
    followersCount: 20,
    rateCount: 4.2,
    ratePeopleCount: 15
}

const fakeQR: QRCardProps = {
    title: "QR Code",
    alertMessage: "Download the QR code or share it with your friends.",
    avatarName: `Hala Ahmed`
}

const AppWrapper: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="p-4 grid gap-4 lg:grid-cols-1 xl:grid-cols-4 default-wrapper">
                <div className="grid gap-4 self-start">
                    <div className="p-4">
                        <AvatarCard {...fakeAvatar} />
                    </div>
                    <div className="p-4">
                        <QRCard {...fakeQR} />
                    </div>
                </div>
                <div className="p-4 lg:col-span-3">
                    <ProductList products={fakeProducts} />
                </div>
            </main>
        </>
    );
};

export default AppWrapper;
