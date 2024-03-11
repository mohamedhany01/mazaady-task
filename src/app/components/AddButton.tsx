import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

interface AddButtonProps {
    children: React.ReactNode;
}

const AddButton: React.FC<AddButtonProps> = ({ children }) => {
    return (

        <button className="mx-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-3 rounded-xl items-center hidden lg:flex">
            <IoAddCircleOutline className="mr-2" />
            {children}
        </button>
    );
};

export default AddButton;
