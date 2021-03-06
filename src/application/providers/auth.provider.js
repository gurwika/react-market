import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../persistence/store';

export const AuthProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
