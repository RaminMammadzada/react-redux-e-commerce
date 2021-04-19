import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// eslint-disable-next-line react/display-name
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => (
    isLoading
      ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )
      : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WrappedComponent {...otherProps} />
      )
  );

  Spinner.propTypes = {
    isLoading: PropTypes.bool,
  };

  Spinner.defaultProps = {
    isLoading: true,
  };

  return Spinner;
};

export default WithSpinner;
