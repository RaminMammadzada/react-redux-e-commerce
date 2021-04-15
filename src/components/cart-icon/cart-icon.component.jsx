import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toogleCartHidden from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toogleCartHidden }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className="cart-icon"
    onClick={toogleCartHidden}
    role="button"
    tabIndex="0"
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

CartIcon.propTypes = {
  toogleCartHidden: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
