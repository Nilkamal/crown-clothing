import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.action";
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartDropdown, cartItemCount }) => {
  return (
    <CartIconContainer>
      <ShoppingIconContainer
        onClick={() => {
          toggleCartDropdown();
        }}
      />
      <ItemCountContainer>{cartItemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
