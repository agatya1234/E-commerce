import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    return (
        <div className='breadcrum'>
            <span>HOME</span>
            <img src={arrow_icon} alt="arrow" />
            <span>SHOP</span>
            <img src={arrow_icon} alt="arrow" />
            <span>{product.category}</span>
            <img src={arrow_icon} alt="arrow" />
            <span>{product.name}</span>
        </div>
    );
};

export default Breadcrum;
