import { Redirect } from 'react-router';
import React from 'react';

import { store } from '../../persistence/store';

export const NonAuthGuard = Component => ({ match }) =>
	store.getState().session.authenticated ? <Redirect to="/" /> : <Component match={match} />;
