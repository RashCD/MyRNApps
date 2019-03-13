import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginView from '../views/LoginView';

const routeConfiguration = {
  Login: {
    screen: LoginView,
  },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
};

export default createAppContainer(
  createStackNavigator(routeConfiguration, stackNavigatorConfiguration)
);
