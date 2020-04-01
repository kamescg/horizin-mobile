import {createDrawerNavigator} from 'react-navigation-drawer';

import {colors} from '@styles';
import Wallet from '@screens/Wallet';
import SideMenu from './SideMenu';

const DrawerNavigator = createDrawerNavigator(
  {
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        title: 'Wallet',
      },
    },
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'Wallet',
    hideStatusBar: false,
    drawerPosition: 'left',
    drawerBackgroundColor: 'rgba(255,255,255,1)',
    drawerType: 'front',
    overlayColor: 'rgba(255,255,255,.3)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: colors.primary,
    },
  },
);

export default DrawerNavigator;
