import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import PageDetails from './pages/PageDetails';


const App = createStackNavigator();


const Routes = () => {
    return (
        <App.Navigator
            screenOptions={{
            cardStyle: {
                backgroundColor: '#FFF',
            },
        }}>
            <App.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <App.Screen 
                name="PageDetails" 
                component={PageDetails} 
                options={({ route }) => ({ 
                    headerTitleAlign: 'center',
                    title: route?.params?.name,
                    headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                            fontWeight: 'bold',
                      },
                      headerShown: false
                })}
            />
        </App.Navigator>
    );
}


export default Routes;