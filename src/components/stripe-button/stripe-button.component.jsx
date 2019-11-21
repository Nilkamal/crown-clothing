import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_63kztk9jJSoqwOh1e9UoFcIJ00LkJuQPNH';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='CROWN CLOTHING PVT LTD'
            billingAddress
            shippingAddress
            stripeKey={publishableKey}
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
        />
    )

}

export default StripeButton;