import React from "react";
import CollectionOverview from '../../components/collection-overview/collections.overview.component';
import CollectionPage from '../collection/collection-component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.action';

import { firestore, convertCollectionsSnapshotToMaps } from '../../firebase/firebase.utils';


class ShopPage extends React.Component {
  unsubscribeFromCollections = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    const {updateCollection} = this.props;
    this.unsubscribeFromCollections = collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsSnapshotToMaps(snapshot);
      updateCollection(collections);
    })

  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollection: (collectionMap) => {
    dispatch(updateCollections(collectionMap))
  }
})
export default connect(null,mapDispatchToProps)(ShopPage);
