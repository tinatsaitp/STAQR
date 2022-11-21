import React from 'react';
import {View, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Navbar from './src/screens/Navbar';
import ProfileScreen from './src/screens/ProfileScreen';
import MenuWindow from './src/screens/MenuWindow';



const App = () => {
  return (
    <View style={styles.pageContainer}>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    flex: 1,
    //backgroundColor: 'blue',
  },
});

export default App;
