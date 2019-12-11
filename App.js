import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { createStackNavigator, createAppContainer } from "react-navigation";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './screens/Home'
import Login from './screens/Login'
import Cadastrar from './screens/Cadastrar'
import Reducers from './screens/Reducers'

let store = createStore(Reducers);

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Cadastrar: {
    screen: Cadastrar
  }

});

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
          <Navigation/>
      </Provider>
    );
  }
}