import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import UploadScreen from './UploadScreen';
import {AuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {isLoading, userToken, userInfo} = useContext(AuthContext);

  if (isLoading) {
    return (
    <View style={styles.isLoadingStyle}>
      <ActivityIndicator size={'large'}/>
    </View>
    );
  }

  return (
    <NavigationContainer>

      <Stack.Navigator headerMode 
       initialRouteName='Login'>
        {userToken !== null && userInfo !== null ? [
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{header: () => null}}
        />,
        <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{header: () => null}}
        />,
        <Stack.Screen 
            name="Upload" 
            component={UploadScreen}
            options={{header: () => null}}
        />
        ]
        :
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{header: () => null}}
        />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  isLoadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
