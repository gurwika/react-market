import { Redirect } from 'react-router';
import React from 'react';

import { store } from '../../persistence/store';

export const AuthGuard = Component => ({ match }) =>
	!store.getState().session.authenticated ? <Redirect to="/login" /> : <Component match={match} />;
