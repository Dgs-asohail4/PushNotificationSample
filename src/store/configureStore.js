import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import {createLogger}  from 'redux-logger'

const logger = createLogger();

// if (__DEV__) {
// 	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
// 	middleware = [...middleware, logger];
// } else {
// 	middleware = [...middleware, logger];
// }

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		applyMiddleware(logger)
	  );
}