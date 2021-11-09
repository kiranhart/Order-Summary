import React from 'react';

const Button = ({styles, content, bgColor}) => {
    return (
        <div className={`mt-14 w-[70%] rounded-xl grid place-items-center font-semibold py-3 text-lg shadow-xl mb-4 bg-[#3829e0] hover:bg-opacity-75 transition-all delay-75 cursor-pointer text-white bg-[${bgColor}] ${styles}`}>
            {content}
        </div>
    );
};

export default Button;
