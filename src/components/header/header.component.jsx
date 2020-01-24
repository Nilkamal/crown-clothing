import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionContainer
} from "./header.styles";

class Header extends React.Component {
  render() {
    const { currentUser, hidden, signOutStart } = this.props;

    return (
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink  to="/shop">
            CONTACT
          </OptionLink>
          {currentUser ? (
            <OptionLink as='div'  onClick={() => signOutStart()}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink  to="/signin">
              SIGN IN
            </OptionLink>
          )}
          <CartIcon />

          {hidden ? null : <CartDropdown />}
        </OptionContainer>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
