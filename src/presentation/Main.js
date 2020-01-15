import React from 'react';
import { Router, Route } from 'react-router-dom';

import './Main.scss';

import { history } from '../persistence/history';
import { AuthProvider } from '../application/providers/auth.provider';
import { NonAuthGuard } from '../application/guards/non.auth.guard';
import { AuthGuard } from '../application/guards/auth.guard';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import AuthHeader from './components/authHeader/AuthHeader';

export const Main = () => (
	<Router history={history}>
		<AuthProvider>
			<AuthHeader />
			<div className="container">
				<Route exact path="/" render={AuthGuard(Home)} />
				<Route exact path="/login" render={NonAuthGuard(Login)} />
				<Route exact path="/signup" render={NonAuthGuard(Signup)} />
			</div>
		</AuthProvider>
	</Router>
);
