import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppNavigator from './src/screens/appNavigator';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    //backgroundColor: 'blue',
  },
});

export default App;
