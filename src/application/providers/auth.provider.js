import React from 'react';
import { Provider } from 'react-redux';

import { firebaseAPI } from '../firebaseAPI';
import { store } from '../../persistence/store';

export const AuthProvider = ({ children }) => {
	firebaseAPI.auth().onAuthStateChanged(user => {
		// console.log(user);
	});

	return <Provider store={store}>{children}</Provider>;
};
