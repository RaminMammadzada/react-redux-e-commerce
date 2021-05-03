import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';

import CheckoutPage from './pages/checkout/checkout.component';

import selectCurrentUser from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (
              currentUser
                ? (<Redirect to="/" />)
                : (<SignInAndSignUpPage />)
            )}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
  checkUserSession: PropTypes.func.isRequired,
};

App.defaultProps = {
  currentUser: {},
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
