import React, {Component} from 'react';
import { Platform } from 'react-native'
import Home from '../components/Home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      judul: 'Welcome To Rehanchrl BoilerPlate'
    }
  }

  render() {
    return (
      <Home judul={this.state.judul} instructions={instructions} />
    );
  }
}