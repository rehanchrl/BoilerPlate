import { StackNavigator } from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import TodoContainer from './app/containers/TodoContainer'

const AppNavigator = StackNavigator(
  {
    HomeContainer: {screen : HomeContainer },
    TodoContainer: {screen : TodoContainer },
    
  }, {
    initialRouteName: 'TodoContainer',
    headerMode: 'none'
  }
)

export default AppNavigator