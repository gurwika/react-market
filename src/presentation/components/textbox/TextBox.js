import React from 'react';
import { Field } from 'formik';

export default ({ name, label, type, placeholder, touched, error }) => (
	<div className="text-box">
		<div className="text-box__wrapper">
			{label && <label htmlFor={name}>{label}</label>}
			<Field name={name} type={type} placeholder={placeholder} />
			{error && touched && <p className="text-box__error">{error}</p>}
		</div>
	</div>
);
