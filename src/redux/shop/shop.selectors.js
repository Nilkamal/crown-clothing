import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsPreview = createSelector(
    [selectCollections],
    collections => collections ?  Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = collectionIdUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionIdUrlParam] : null
)

export const selectCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectCollectionLoading = createSelector(
    [selectShop],
    shop => !(!!shop.collections)
)