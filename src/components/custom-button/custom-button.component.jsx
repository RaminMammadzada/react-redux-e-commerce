import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    type="submit"
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

CustomButton.defaultProps = {
  inverted: false,
  isGoogleSignIn: false,
};

export default CustomButton;
