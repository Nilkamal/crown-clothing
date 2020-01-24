import { all, put, takeLatest, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.action'

export function* onClearCart() {
    yield put(clearCart())
}
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, onClearCart )
}
export function* cartSaga() {
    yield all([
        call(onSignOutSuccess)
    ])
}