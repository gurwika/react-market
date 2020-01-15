import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../persistence/history';
import { AuthProvider } from '../application/providers/auth.provider';
import Login from './login/Login';
import Signup from './signup/Signup';
import Home from './home/Home';
import { NonAuthGuard } from '../application/guards/non.auth.guard';
import { AuthGuard } from '../application/guards/auth.guard';

export const Main = () => (
	<Router history={history}>
		<AuthProvider>
			<div className="container">
				<Route exact path="/" render={AuthGuard(Home)} />
				<Route exact path="/login" render={NonAuthGuard(Login)} />
				<Route exact path="/signup" render={NonAuthGuard(Signup)} />
			</div>
		</AuthProvider>
	</Router>
);
