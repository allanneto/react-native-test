import React from 'react';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import App from './App';

function src() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#dba11a" />
      <App />
    </NavigationContainer>
  );
}

export default src;
