import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import selectCurrentUser from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {
        currentUser ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <OptionDiv
            role="button"
            tabIndex="0"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null
        : <CartDropdown />
    }
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
  hidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  currentUser: {},
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
