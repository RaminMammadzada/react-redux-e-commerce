import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import updateCollections from '../../redux/shop/shop.actions';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const colletionsMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(colletionsMap);
      updateCollections(colletionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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
