import { combineReducers } from 'redux';

let defaultState = {
	session: {}
};

export const reducer = combineReducers({
	session: (session = defaultState.session || {}, action) => {
		return session;
	}
});
