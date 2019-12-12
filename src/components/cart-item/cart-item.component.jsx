import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemDetailsNameContainer,
  CartImageContainer
} from "./cart-item.styles";


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartImageContainer src={imageUrl} alt="Item" />
    <ItemDetailsContainer>
      <ItemDetailsNameContainer>{name}</ItemDetailsNameContainer>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
