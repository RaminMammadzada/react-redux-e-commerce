import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => (
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
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin" onClick={signInWithGoogle}>
            SIGN IN
          </Link>
        )
      }
    </div>
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.node.isRequired,
};

export default Header;
