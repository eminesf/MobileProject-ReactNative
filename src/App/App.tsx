import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';

import Routes from '../routes/routes';
import store from '../store/store';



const App = () => {
  return (
    <Provider store ={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#f4511e"
          translucent
        />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};


export default App;