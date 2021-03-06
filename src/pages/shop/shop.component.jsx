import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  fetchCollectionsStart: PropTypes.func.isRequired,
};

ShopPage.defaultProps = {
  match: {},
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(ShopPage);
