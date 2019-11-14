import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, price, quantity, imageUrl } }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remote-button">&#10006;</div>
    </div>
)

export default CheckoutItem;