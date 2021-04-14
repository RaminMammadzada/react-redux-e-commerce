import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </label>

          <input type="submit" value="Submit Form" />
        </form>

      </div>
    );
  }
}

export default SignIn;
