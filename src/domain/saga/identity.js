import { take, put } from 'redux-saga/effects';

import * as mutations from '../mutations';
import { history } from '../../persistence/history';
import firebaseAPI from '../../application/services/firebaseAPI.service';
import apiClientService from '../../application/services/apiClient.service';

export function* requestAuthenticateUserSage() {
	while (true) {
		const { email, password } = yield take(mutations.REQUEST_AUTHENTICATE_USER);

		try {
			const { user } = yield firebaseAPI.auth().signInWithEmailAndPassword(email, password);
			yield put(mutations.requestInitIdentity(user));
		} catch (exception) {
			yield put(mutations.failedAuthenticateUser(exception));
		}
	}
}

export function* requestSignUpUserSage() {
	while (true) {
		const { email, password } = yield take(mutations.REQUEST_SIGN_UP_USER);

		try {
			const { user } = yield firebaseAPI.auth().createUserWithEmailAndPassword(email, password);
			yield put(mutations.requestInitIdentity(user));
		} catch (exception) {
			yield put(mutations.failedSignUpUser(exception));
		}
	}
}

export function* requestInitIdentitySage() {
	while (true) {
		const { user } = yield take(mutations.REQUEST_INIT_IDENTITY);
		const token = {
			refreshToken: user.refreshToken,
			accessToken: yield user.getIdToken()
		};

		apiClientService.setToken(token);
		history.push(`/`);
	}
}

export function* requestSignOutSage() {
	while (true) {
		yield take(mutations.REQUEST_SIGN_OUT);
		apiClientService.handleSignOut();
		history.push(`/login`);
	}
}
