import React from 'react';
import { Field } from 'formik';
import classNames from 'classnames';

import './TextBox.scss';

export default ({ name, label, type, placeholder, touched, error }) => (
	<div className="text-box">
		<div className="text-box__wrapper">
			<div
				className={classNames({
					'text-box__container': true,
					'text-box__container--error': error && touched
				})}
			>
				{label && <label htmlFor={name}>{label}</label>}
				<Field name={name} type={type} placeholder={placeholder} className="text-box__input" />
				{error && touched && <p className="text-box__error">{error}</p>}
			</div>
		</div>
	</div>
);
