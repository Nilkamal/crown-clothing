import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutPage from './checkout.component';
import { compose } from 'redux';


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const CheckoutPageContainer = compose(
    connect(mapStateToProps),
)(CheckoutPage)

export default CheckoutPageContainer;