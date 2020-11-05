import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial167826Navigator from '../features/Tutorial167826/navigator';
import NotificationList167798Navigator from '../features/NotificationList167798/navigator';
import Settings167797Navigator from '../features/Settings167797/navigator';
import Settings167789Navigator from '../features/Settings167789/navigator';
import UserProfile167787Navigator from '../features/UserProfile167787/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial167826: { screen: Tutorial167826Navigator },
NotificationList167798: { screen: NotificationList167798Navigator },
Settings167797: { screen: Settings167797Navigator },
Settings167789: { screen: Settings167789Navigator },
UserProfile167787: { screen: UserProfile167787Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
