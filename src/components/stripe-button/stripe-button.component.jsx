import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IhXmzB6XL6CCu8c5MfEiDUo0iN9LQGlZOPu3ljWN4D4YC4xrDu6Q56kJ1HgQWDKF422J1I3QQ48pjHvlR1kYYwc00r6r8y2w4';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Remki Design LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/WMF.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeCheckoutButton;
