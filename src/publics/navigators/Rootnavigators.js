import React from 'react';
import { Icon} from 'native-base'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Home from '../../screens/Home'
import Chat from '../../screens/Chat'
import Profile from '../../screens/Profile'
import Settings from '../../screens/Settings'

const App = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon style={{ color: tintColor, fontSize: 25 }} type="FontAwesome" name="home" />
            )
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon style={{ color: tintColor, fontSize: 25 }} type="Entypo" name="news" />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon style={{ color: tintColor, fontSize: 25 }} type="MaterialCommunityIcons" name="account" />
            )
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon style={{ color: tintColor, fontSize: 25 }} type="MaterialCommunityIcons" name="account" />
            )
        }
    },
}, {
        initialRouteName: 'Home',
        activeColor: 'white',
        inactiveColor: 'black',
        barStyle: { backgroundColor: '#016fba' },
    });

const RootNavigator = createStackNavigator({
    App: {
      screen: App,
    }
});
export default createAppContainer(RootNavigator);