import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
export const selectCollection = collectionIdUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionIdUrlParam]
)