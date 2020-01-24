import { all, takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMaps
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";
export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMaps,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSaga() {
  yield all([
    call(fetchCollectionStart)
  ])
}
