import { Redirect } from 'react-router';
import React from 'react';

import apiClientService from '../services/apiClient.service';

export const NonAuthGuard = Component => ({ match }) =>
	apiClientService.isAuthorized() ? <Redirect to="/" /> : <Component match={match} />;
