import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ZaR8euE6zD89407ABusGlgbV00fXZN9tI3';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Prisvarda Hjalpmedel'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
