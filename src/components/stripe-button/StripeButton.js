import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg';

const StripeButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_pBLOqR9tg3g5oO9CLPomP6JG00AkyeQRDi'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
          lebel="Pay Now"
          name="E-Bolt Limited."
          billingAddress
          shippingAddress
          image={logo}
          description={`Your total is $${price}`}
          amount={stripePrice}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeButton;
