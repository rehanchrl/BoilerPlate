import { StackNavigator } from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'

const AppNavigator = StackNavigator(
  {
    HomeContainer: {screen : HomeContainer },
    
  }, {
    initialRouteName: 'HomeContainer',
    headerMode: 'none'
  }
)

export default AppNavigator