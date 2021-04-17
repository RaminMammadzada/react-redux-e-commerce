import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({ id, title, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
        />
      ))
    }
  </div>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.any),
};

CollectionsOverview.defaultProps = {
  collections: [],
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
