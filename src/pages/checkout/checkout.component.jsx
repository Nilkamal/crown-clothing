import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


import './checkout.styles.scss';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {

            cartItems.map(cartItem => {
                console.log(cartItem);
                return (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            })
        }

        <div className="total">
            <span>TOTAL ${total}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payment 
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeButton price={total} />
    </div>
)


export default CheckOutPage;
