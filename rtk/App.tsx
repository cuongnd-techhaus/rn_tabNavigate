import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login.js';
import {store} from './src/store.js';
import {Provider} from 'react-redux';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import Product from './src/screens/Product';

function LoginScreen({navigation}) {
  return (
    <Provider store={store}>
      <Login />
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

function HomeScreen({navigation}) {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

function ProductScreen({navigation}) {
  return (
    <Provider store={store}>
      <Product />
    </Provider>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="1. Login" component={LoginScreen} />
        <Drawer.Screen name="2. Profile" component={ProfileScreen} />
        <Drawer.Screen name="3. Home" component={HomeScreen} />
        <Drawer.Screen name="4. Product" component={ProductScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
