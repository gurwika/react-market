import React from 'react';

import './Submit.scss';

export default ({ title, disabled }) => (
	<button className="submit" type="submit" disabled={disabled}>
		{title}
	</button>
);
