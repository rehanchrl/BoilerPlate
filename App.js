import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import rootReducers from './app/reducers'
import AppNavigator from './AppNavigator'
import './ReactotronConfig'

const store = Reactotron.createStore(rootReducers, applyMiddleware(thunk))

export default App = () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
)
