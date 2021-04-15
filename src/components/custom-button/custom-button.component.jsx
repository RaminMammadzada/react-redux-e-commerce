import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    type="submit"
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  isGoogleSignIn: PropTypes.bool.isRequired,
};

export default CustomButton;
