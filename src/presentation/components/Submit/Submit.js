import React from 'react';
import PropTypes from 'prop-types';

export default ({ title, disabled }) => (
	<button type="submit" disabled={disabled}>
		{title}
	</button>
);
