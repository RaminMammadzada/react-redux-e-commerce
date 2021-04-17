import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length
          ? cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
            />
          ))
          : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton
      // eslint-disable-next-line react/prop-types
      onClick={() => {
        history.push('/checkout');
        dispatch(toogleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
  dispatch: PropTypes.func.isRequired,
};

CartDropdown.defaultProps = {
  cartItems: [],
  history: {},
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
