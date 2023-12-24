import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button className="bg-blue-500 text-white font-bold px-7 py-2" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
