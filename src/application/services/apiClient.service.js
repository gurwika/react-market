import cookieService from './cookie.service';

import { store } from '../../persistence/store';
import * as mutations from '../../domain/mutations';

class APIClientService {
	isAuthorized() {
		return !!this.accessToken;
	}

	render() {
		const accessToken = cookieService.get('accessToken');
		const refreshToken = cookieService.get('refreshToken');

		if (accessToken || refreshToken) {
			this.setToken({ accessToken, refreshToken });
		}
	}

	setToken({ accessToken, refreshToken }) {
		store.dispatch(mutations.initIdentity({ accessToken, refreshToken }));
		cookieService.set('accessToken', accessToken);
		cookieService.set('refreshToken', refreshToken);
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}

	handleSignOut() {
		// this.httpClient.removeDefaulHeader('Authorization');
		store.dispatch(mutations.destroyIdentity());
		cookieService.delete('accessToken');
		cookieService.delete('refreshToken');
		this.accessToken = null;
		this.refreshToken = null;
	}
}

export default new APIClientService();
