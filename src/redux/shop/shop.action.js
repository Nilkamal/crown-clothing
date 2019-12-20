import ShopActionTypes from './shop.types';
import {
    firestore,
    convertCollectionsSnapshotToMaps
} from '../../firebase/firebase.utils';

export const updateCollections = collectionMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart())
    collectionRef.get().then(snapshot => {
        const collections = convertCollectionsSnapshotToMaps(snapshot);
        dispatch(fetchCollectionSuccess(collections))
    }).catch(error => dispatch(fetchCollectionFailure(error.message)))
}