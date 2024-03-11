import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button
            className={`bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-4 py-3 rounded-xl w-full`}
        >
            {children}
        </button>
    );
};

export default Button;
