import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'
import {name as appName} from './app.json';

Reactotron.configure({ name: appName })
  .useReactNative()
  .use(reactotronRedux())
  .connect()