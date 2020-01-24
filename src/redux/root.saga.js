import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shop.sagas';
import { cartSaga } from './cart/cart.sagas';
import { userSagas } from './user/user.sagas';


export default function* rootSaga() {
    yield all([
        call(shopSaga), call(userSagas), call(cartSaga)
    ])
};