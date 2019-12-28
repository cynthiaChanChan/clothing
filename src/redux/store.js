import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import reducers from './reducers/index';

const middleWares = [logger];

const store = createStore(reducers, applyMiddleware(...middleWares));
const persistor = persistStore(store);

export { store, persistor };