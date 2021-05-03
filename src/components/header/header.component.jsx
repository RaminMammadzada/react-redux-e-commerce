import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import selectCurrentUser from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            role="button"
            tabIndex="0"
            className="option"
            onClick={signOutStart}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )
      }
      <CartIcon />
    </div>
    {
      hidden ? null
        : <CartDropdown />
    }
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
  hidden: PropTypes.bool.isRequired,
  signOutStart: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentUser: {},
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
