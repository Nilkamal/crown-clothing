import React from "react";
import CollectionOverview from '../../components/collection-overview/collections.overview.component';
import CollectionPage from '../collection/collection-component';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching, selectCollectionLoading } from '../../redux/shop/shop.selectors';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverviewSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
   const {fetchCollectionsStartAsync} = this.props;
   fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoading } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewSpinner loading={isCollectionFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={ props => <CollectionPageSpinner loading={isCollectionLoading} {...props} />} />
      </div>
    )
  }
} 

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionLoading: selectCollectionLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync:() => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
