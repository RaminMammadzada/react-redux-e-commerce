import React from 'react';
import PropTypes from 'prop-types';
// import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = ({ match }) => (
  <div className="collection-page">
    <h2>Collection Page</h2>
    <h2>{match.params.collectionId}</h2>
  </div>
);

CollectionPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

CollectionPage.defaultProps = {
  match: {},
};

export default CollectionPage;
