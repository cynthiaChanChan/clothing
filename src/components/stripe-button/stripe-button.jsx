import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import logo from '../../assets/logo.svg';

const StripeButton = ({ price }) => {
    const publishableKey = 'pk_test_gqyEVy6JwbBwiba331Fw4DQU008LyTzp9Y';
    const priceForStripe = price * 100;
    const onToken = (token) => {
        console.log(token);
        alert('Payment successfully')
    };

    return (
        <StripeCheckout
            label='Pay Now' 
            name='Clothing' 
            image={logo} 
            billingAddress 
            shippingAddress  
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel='Pay Now' 
            token={onToken} 
            stripeKey={publishableKey}
        >

        </StripeCheckout>
    );
};

export default StripeButton;