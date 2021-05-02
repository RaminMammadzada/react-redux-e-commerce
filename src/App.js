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

import selectCurrentUser from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
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
};

App.defaultProps = {
  currentUser: {},
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(App);
