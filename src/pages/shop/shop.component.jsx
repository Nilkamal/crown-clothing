import React from "react";
import CollectionOverview from '../../components/collection-overview/collections.overview.component';
import CollectionPage from '../collection/collection-component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { firestore, convertCollectionsSnapshotToMaps } from '../../firebase/firebase.utils';

const CollectionOverviewSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromCollections = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    const {updateCollection} = this.props;
    this.unsubscribeFromCollections = collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsSnapshotToMaps(snapshot);
      updateCollection(collections);
      // Here update loading state
      this.setState({loading: false});
    })

  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewSpinner loading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={ props => <CollectionPageSpinner loading={loading} {...props} />} />
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
