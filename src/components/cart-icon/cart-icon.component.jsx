import React from "react";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { toggleCartDropdown } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleCartDropdown, cartItemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => {
          debugger;
          toggleCartDropdown();
        }}
      />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
