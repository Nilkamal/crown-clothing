import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { selectCollectionLoading } from '../../redux/shop/shop.selectors';
import CollectionPage from './collection-component';
const mapStateToProps = createStructuredSelector({
    loading: selectCollectionLoading
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
