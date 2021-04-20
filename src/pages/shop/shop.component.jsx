import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={
          // eslint-disable-next-line react/jsx-props-no-spreading
            (props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={
          // eslint-disable-next-line react/jsx-props-no-spreading
            (props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
          }
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  updateCollections: PropTypes.func.isRequired,
  isCollectionFetching: PropTypes.bool.isRequired,
  fetchCollectionsStartAsync: PropTypes.func.isRequired,
};

ShopPage.defaultProps = {
  match: {},
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopPage);
