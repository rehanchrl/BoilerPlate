import React from 'react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import rootReducers from './app/reducers'
import AppNavigator from './AppNavigator'
import './ReactotronConfig'

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2
}

const persistReducers = persistReducer(persistConfig, rootReducers)
const store = Reactotron.createStore(persistReducers, applyMiddleware(thunk))
export const persistor = persistStore(store)


export default App = () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
)
