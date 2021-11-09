import React from 'react';

const Card = ({children, styles}) => {
    return (
        <div className={`bg-white w-[450px] rounded-3xl ${styles}`}>
            {children}
        </div>
    );
};

export default Card;
