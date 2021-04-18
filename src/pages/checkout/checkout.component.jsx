import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div>
      {
        cartItems.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
          />
        ))
      }
    </div>
    <div className="total">
      <span>{`TOTAL: ${total}`}</span>
      <div className="test-warning">
        * Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any),
  total: PropTypes.number.isRequired,
};

CheckoutPage.defaultProps = {
  cartItems: [],
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);