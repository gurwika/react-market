import cookie from 'react-cookies';

class CookieService {
	get(key, fallback) {
		if (!fallback) {
			fallback = '';
		}

		const cookieValue = cookie.load(key);

		if (typeof cookieValue === 'undefined' || !cookieValue) {
			return fallback;
		}

		return cookieValue;
	}

	set(key, value, days) {
		if (!days) {
			days = 365 + 1;
		}

		const expires = new Date();
		expires.setDate(Date.now() + days * 24 * 60 * 60 * 1000);

		cookie.save(key, value, { path: '/', expires });
	}

	delete(key) {
		cookie.remove(key, { path: '/' });
	}
}

export default new CookieService();
