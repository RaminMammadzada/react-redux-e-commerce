import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}) => {
  const {
    name,
    imageUrl,
    price,
    quantity,
  } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div
          className="arrow"
          onClick={() => removeItem(cartItem)}
          aria-hidden="true"
        >
          &#10094;
        </div>
        <span className="value">
          {quantity}
        </span>
        <div
          className="arrow"
          onClick={() => addItem(cartItem)}
          aria-hidden="true"
        >
          &#10095;
        </div>
      </div>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItem(cartItem)}
        role="button"
        tabIndex="0"
        aria-hidden="true"
      >
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.objectOf(PropTypes.any).isRequired,
  clearItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
