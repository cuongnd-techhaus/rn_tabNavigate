import * as React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login.js';
import {Provider} from 'react-redux';
import {store} from './src/redux/store.js';
import Home from './src/screens/Home.js';
import Profile from './src/screens/Profile.js';

function LoginScreen({navigation}) {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

function HomeScreen({navigation}) {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

function ProfileScreen({navigation}) {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
