/** @format */

import {AppRegistry} from 'react-native';
import App from './App'; //index for project (coment salah satu)
// import App from './app/sampleTesting/index'; //index for testing (coment salah satu)
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
