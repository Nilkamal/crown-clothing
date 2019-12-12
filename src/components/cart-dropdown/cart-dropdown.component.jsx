import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from  './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
          <EmptyMessageContainer>Your cart is empty !</EmptyMessageContainer>
        )}
    </CartItemsContainer>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartDropdown())
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))
