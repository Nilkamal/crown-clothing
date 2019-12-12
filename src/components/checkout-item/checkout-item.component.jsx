import React from "react";
import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImage,
  QuantityContainer,
  ArrowContainer,
  ValueContainer,
  TextContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

import {
  clearItemFromCheckout,
  addItem,
  removeItem
} from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt="item" />
      </CheckoutImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10006;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCheckout(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
