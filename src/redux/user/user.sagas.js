import { takeLatest, all, call, put } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
    signInSuccess,
    signInFailure,
    signOutFailure,
    signOutSuccess,
    signUpSuccess,
    signUpFailure
} from './user.actions';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getUserRef(user, additionalData) {
    console.log('CALLED')
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const snapshot = yield userRef.get();
        yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getUserRef(user)

    } catch (error) {
        put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getUserRef(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getUserRef(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    try {
        yield getUserRef(user, additionalData);
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signUp({ payload: { email, password, phoneNumber, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { phoneNumber, displayName } }));
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}
