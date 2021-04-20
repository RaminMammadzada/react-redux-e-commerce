import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// compose() evaluates from right to left
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);

// it was previously written like the following style without using compose() method
// const CollectionsOverviewContainer = connect(
//   mapStateToProps,
// )(
//   WithSpinner(CollectionOverview),
// );

export default CollectionsOverviewContainer;
