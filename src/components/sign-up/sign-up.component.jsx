import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    const { signUpStart } = this.props;
    signUpStart(email, password, displayName);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account</h2>
        <span>Sign up will your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton isGoogleSignIn={false} type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) => dispatch(
    signUpStart({ email, password, displayName }),
  ),
});

export default connect(null, mapDispatchToProps)(SignUp);
