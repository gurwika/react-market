import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './AuthHeader.scss';
import { requestSignOutUser } from '../../../domain/mutations';

const AuthHeader = ({ identity, handleSignOut }) => (
	<div className="auth-header">
		<div className="auth-header__wrapper">
			<div className="container-fluid">
				<div className="auth-header__container wrapper">
					<div className="auth-header__logo">
						<img src="/media/logos/black.jpg" />
					</div>
					<div className="auth-header__navigation">
						{(!identity || !identity.accessToken) && <Link to="/login">Login</Link>}
						{(!identity || !identity.accessToken) && <Link to="/signup">Signup</Link>}
						{identity && identity.accessToken && <button onClick={handleSignOut}>Sign out</button>}
					</div>
				</div>
			</div>
		</div>
	</div>
);

const mapStateToProps = ({ identity }) => ({ identity });

const mapDispatchToProps = (dispatch, { id }) => {
	return {
		handleSignOut() {
			dispatch(requestSignOutUser());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);
