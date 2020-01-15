import { combineReducers } from 'redux';

import * as mutations from '../mutations';

export const reducer = combineReducers({
	identity: (identity = {} || {}, action) => {
		switch (action.type) {
			case mutations.FAILED_AUTHENTICATE_USER:
				return { ...identity, loginState: { exception: action.exception } };
			case mutations.FAILED_SIGN_UP_USER:
				return { ...identity, signupState: { exception: action.exception } };
			case mutations.INIT_IDENTITY:
				return { ...identity, ...action.token, loginState: {}, signupState: {} };
			case mutations.DESTROY_IDENTITY:
				return { loginState: {}, signupState: {} };
		}

		return identity;
	}
});
