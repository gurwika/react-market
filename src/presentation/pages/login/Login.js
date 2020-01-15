import React from 'react';
import * as yup from 'yup';
import { connect } from 'react-redux';

import './Login.scss';
import TextBox from '../../components/textbox/Textbox';
import Submit from '../../components/submit/Submit';
import { withFormik, Form } from 'formik';
import { requestAuthenticateUser } from '../../../domain/mutations';

const Login = ({ loginState, errors, touched }) => (
	<div className="login">
		<div className="login__wrapper">
			<div className="login__container">
				<h2 className="login__title">Login</h2>
				<Form>
					<div className="login__input">
						<TextBox name="email" type="text" placeholder="Email" error={errors.email} touched={touched.email} />
					</div>
					<div className="login__input">
						<TextBox name="password" type="password" placeholder="Password" error={errors.password} touched={touched.password} />
					</div>
					{loginState && loginState.exception && <div className="login__error">{loginState.exception.message}</div>}
					<div className="login__footer">
						<div className="login__footer-submit">
							<Submit title="Log in" />
						</div>
					</div>
				</Form>
			</div>
		</div>
	</div>
);

const mapStateToProps = ({ identity: { loginState } }) => ({ loginState });

const mapDispatchToProps = dispatch => {
	return {
		authenticateUser({ email, password }) {
			dispatch(requestAuthenticateUser(email, password));
		}
	};
};

const LoginFormik = withFormik({
	validationSchema: yup.object().shape({
		email: yup
			.string()
			.email()
			.required(),
		password: yup
			.string()
			.min(6)
			.required()
	}),
	mapPropsToValues: ({ email, password }) => {
		return {
			email: email || '',
			password: password || ''
		};
	},
	handleSubmit: (values, { props }) => {
		props.authenticateUser(values);
	}
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormik);
