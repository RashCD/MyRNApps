import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainView from '../views/MainView';

const routeConfiguration = {
  Main: {
    screen: MainView,
  },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
};

export default createAppContainer(
  createStackNavigator(routeConfiguration, stackNavigatorConfiguration)
);
