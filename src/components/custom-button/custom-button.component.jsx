import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

import CustomButtonContainer from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
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
