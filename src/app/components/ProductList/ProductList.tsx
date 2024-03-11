import React from 'react';
import { IoAdd } from 'react-icons/io5';
import ProductCard from './ProductCard';
import ProductCardProps from '@/app/interfaces/ProductCardProps';
import AddButton from '../AddButton';

interface ProductListProps {
    products: ProductCardProps[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    return (
        <div className="border rounded-2xl p-6 bg-white">
            {/* Floating button */}
            <button className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-3 rounded-xl items-center lg:relative fixed bottom-1/2 right-8 lg:hidden flex">
                <IoAdd className="mr-2" />
                Add Review
            </button>
            <div className="flex justify-between mb-4">
                <div className='flex gap-4'>
                    <button className="border border-orange-300 px-4 py-2 rounded-2xl text-orange-400 font-bold bg-orange-100">Products</button>
                    <button className="border border-gray-300 px-4 py-2 rounded-2xl text-gray-400 font-normal bg-transparent">Articles</button>
                    <button className="border border-gray-300 px-4 py-2 rounded-2xl text-gray-400 font-normal bg-transparent">Reviews</button>
                </div>
                <AddButton>
                    Add Review
                </AddButton>
            </div>
            <div className='my-6'>
                <h1 className='font-bold text-3xl'>Products <span className='text-gray-400 font-light text-lg'>({products.length})</span> </h1>
            </div>
            <div>
                {products.map((product, i) => (
                    <ProductCard key={i} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
