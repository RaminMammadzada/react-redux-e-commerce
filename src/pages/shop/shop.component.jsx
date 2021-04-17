import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import selectCollections from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
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

ShopPage.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.any),
};

ShopPage.defaultProps = {
  collections: [],
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
