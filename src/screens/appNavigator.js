import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode 
       initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{header: () => null}}
        />
        <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
