import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import userReducer from './user-reducer';
import cartReducer from './cart-reducer';
import directoryReducer from './directory-reducer';
import shopReducer from './shop-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //only cart will be persisted
};

const reducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, reducers);