import { Redirect } from 'react-router';
import React from 'react';

import apiClientService from '../services/apiClient.service';

export const AuthGuard = Component => ({ match }) =>
	!apiClientService.isAuthorized() ? <Redirect to="/login" /> : <Component match={match} />;
