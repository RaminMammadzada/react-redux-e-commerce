import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import updateCollections from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');

    fetch('https://firestore.googleapis.com/v1/projects/crwn-db-ramin/databases/(default)/documents/collections')
      .then((response) => response.json())
      .then((collections) => console.log(collections));

    // collectionRef.get().then(
    //   async (snapshot) => {
    //     const colletionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     // console.log(colletionsMap);
    //     updateCollections(colletionsMap);
    //     this.setState({ loading: false });
    //   },
    // );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  updateCollections: PropTypes.func.isRequired,
};

ShopPage.defaultProps = {
  match: {},
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
