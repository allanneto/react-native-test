import React from 'react';

import {darken} from 'polished';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Friends from './pages/Friends';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        inactiveTintColor: '#fff',
        activeTintColor: '#fff',
        keyboardHidesTabBar: true,
        activeBackgroundColor: darken(0.2, '#584CBD'),
        style: {
          backgroundColor: '#584CBD',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <Icon name="person" size={20} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person" size={20} color="#fff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function createRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#32036d',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <Stack.Screen
        name="Tab"
        component={NewTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={{
          headerTitleAlign: 'center',
          title: 'Dashboard',
        }}
      />
    </Stack.Navigator>
  );
}
