import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg';
import axios from 'axios';

const StripeButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_pBLOqR9tg3g5oO9CLPomP6JG00AkyeQRDi'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token
            }
        })
        .then(res => alert('Payment Successful'))
        .catch(error => {
            console.log('Payment error', JSON.parse(error))
            alert('There was an issue with your payment. Please make sure you use the provided credit card.')
        })
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
