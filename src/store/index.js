import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import loginModalReducer from './LoginModal/LoginModal.reducer';
import registerModalReducer from './RegisterModal/RegisterModal.reducer';

const rootReducer = combineReducers({
	loginModal: loginModalReducer,
	registerModal: registerModalReducer
})

const persistConfig = {
	key: 'verzel',
	storage,
	//blacklist e whitelist -> para nao salvar todos os reducers
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };