import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './presentation/Main';

import apiClientService from './application/services/apiClient.service';

apiClientService.render();
ReactDOM.render(<Main />, document.getElementById('app'));
