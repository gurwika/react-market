import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from '../../domain/reducer';
import * as sagas from '../../domain/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

for (let saga in sagas) {
	sagaMiddleware.run(sagas[saga]);
}

export const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
