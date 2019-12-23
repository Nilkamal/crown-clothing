 import { connect } from 'react-redux';
 import { compose } from 'redux';
 import WithSpinner from '../with-spinner/with-spinner';
 import CollectionOverview from './collections.overview.component';
 import { createStructuredSelector } from 'reselect';
 import { selectCollectionFetching } from '../../redux/shop/shop.selectors';

 const mapStateToProps = createStructuredSelector({
     loading: selectCollectionFetching
 });

 const CollectionOverviewContainer = compose(
     connect(mapStateToProps),
     WithSpinner
 )(CollectionOverview)
 
 export default CollectionOverviewContainer;