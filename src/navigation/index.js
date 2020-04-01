import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Hamburger} from 'atoms';

// Entry
import Wallet from './Wallet';

// Primary Screens
import Authentication from '@screens/Authentication';
import WalletCreate from '@screens/WalletCreate';

// Secondary Screens
import QRScanner from '@screens/QRScanner';
import WalletRequests from '@screens/WalletRequests';

const MainStack = createStackNavigator(
  {
    Authentication: {
      screen: Authentication,
      navigationOptions: {
        header: false,
      },
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        headerShown: true,
        headerTitle: 'Wallet',
      },
    },
    WalletCreate: {
      screen: WalletCreate,
      navigationOptions: {
        headerShown: false,
        headerTitle: 'WalletCreate',
      },
    },
    QRScanner,
    WalletRequests,
  },

  // Stack Navigator Settings
  // https://reactnavigation.org/docs/en/stack-navigator.html#navigationoptions-for-screens-inside-of-the-navigator
  {
    initialRouteName: 'Authentication',
    mode: 'modal',
    defaultNavigationOptions: ({navigation}) => ({
      headerShown: false,
      headerMode: 'none',
      gesturesEnabled: true,
      headerRight: <Hamburger navigation={navigation} />,
    }),
  },
);

export default createAppContainer(MainStack);
