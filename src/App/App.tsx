import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../routes/routes';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#f4511e"
        translucent
      />
      <Routes />
    </NavigationContainer>
  );
};


export default App;