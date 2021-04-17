import React from 'react';
import PropTypes from 'prop-types';
import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem: {
    name,
    imageUrl,
    price,
    quantity,
  },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove">&#10005;</div>
  </div>
);

CheckoutItem.propTypes = {
  cartItem: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CheckoutItem;
