import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button
    type="submit"
    className="custom-button"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButton;
