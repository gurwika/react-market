import React from 'react';
import * as yup from 'yup';

import './Login.scss';
import TextBox from '../../components/textbox/Textbox';
import Submit from '../../components/Submit/Submit';
import { withFormik, Form } from 'formik';

const Login = ({ errors, touched }) => (
	<div className="login">
		<h2>Login</h2>
		<Form>
			<TextBox name="email" type="text" label="Email" error={errors.email} touched={touched.email} />
			<TextBox name="password" type="password" label="Password" error={errors.password} touched={touched.password} />
			<Submit title="Log in" />
		</Form>
	</div>
);

export default withFormik({
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
	handleSubmit: (values, { resetForm }) => {
		console.log(values);
	}
})(Login);
