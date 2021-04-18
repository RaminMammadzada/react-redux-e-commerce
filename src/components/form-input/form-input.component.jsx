import React from 'react';
import PropTypes from 'prop-types';
import './form-input.styles.scss';

const FormItem = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
    {
        label
          ? (
            <label htmlFor="input" className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
              {label}
            </label>
          )
          : null
      }
  </div>
);

FormItem.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormItem;
