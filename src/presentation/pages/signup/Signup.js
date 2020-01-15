import React from 'react';
import * as yup from 'yup';
import { connect } from 'react-redux';

import './Signup.scss';
import TextBox from '../../components/textbox/Textbox';
import Submit from '../../components/submit/Submit';
import { withFormik, Form } from 'formik';
import { requestSignUpUser } from '../../../domain/mutations';

const Signup = ({ signupState, errors, touched }) => (
	<div className="signup">
		<div className="signup__wrapper">
			<div className="signup__container">
				<h2 className="signup__title">Sign up</h2>
				<Form>
					<div className="signup__input">
						<TextBox name="email" type="text" placeholder="Email" error={errors.email} touched={touched.email} />
					</div>
					<div className="signup__input">
						<TextBox name="password" type="password" placeholder="Password" error={errors.password} touched={touched.password} />
					</div>
					{signupState && signupState.exception && <div className="signup__error">{signupState.exception.message}</div>}
					<div className="signup__footer">
						<div className="signup__footer-submit">
							<Submit title="Sign up" />
						</div>
					</div>
				</Form>
			</div>
		</div>
	</div>
);

const mapStateToProps = ({ identity: { signupState } }) => ({ signupState });

const mapDispatchToProps = dispatch => {
	return {
		signUpUser({ email, password }) {
			dispatch(requestSignUpUser(email, password));
		}
	};
};

const SignupFormik = withFormik({
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
		props.signUpUser(values);
	}
})(Signup);

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormik);
