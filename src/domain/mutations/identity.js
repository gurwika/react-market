export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const FAILED_AUTHENTICATE_USER = `FAILED_AUTHENTICATE_USER`;
export const REQUEST_SIGN_UP_USER = `REQUEST_SIGN_UP_USER`;
export const FAILED_SIGN_UP_USER = `FAILED_SIGN_UP_USER`;
export const REQUEST_INIT_IDENTITY = `REQUEST_INIT_IDENTITY`;
export const INIT_IDENTITY = `INIT_IDENTITY`;
export const REQUEST_SIGN_OUT = `REQUEST_SIGN_OUT`;
export const DESTROY_IDENTITY = `DESTROY_IDENTITY`;

export const requestAuthenticateUser = (email, password) => ({
	type: REQUEST_AUTHENTICATE_USER,
	email,
	password
});

export const failedAuthenticateUser = exception => ({
	type: FAILED_AUTHENTICATE_USER,
	exception
});

export const requestSignUpUser = (email, password) => ({
	type: REQUEST_SIGN_UP_USER,
	email,
	password
});

export const failedSignUpUser = exception => ({
	type: FAILED_SIGN_UP_USER,
	exception
});

export const requestInitIdentity = user => ({
	type: REQUEST_INIT_IDENTITY,
	user
});

export const initIdentity = token => ({
	type: INIT_IDENTITY,
	token
});

export const requestSignOutUser = user => ({
	type: REQUEST_SIGN_OUT,
	user
});

export const destroyIdentity = token => ({
	type: DESTROY_IDENTITY,
	token
});
