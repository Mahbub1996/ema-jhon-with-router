import React from 'react';
import './PlaceOrder.css'
import GiftImg from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div className="place-order">
            <img src={GiftImg} alt="" />
            <h1>Thank You!! Your Order Already Submitted! </h1>
        </div>
    );
};

export default PlaceOrder;