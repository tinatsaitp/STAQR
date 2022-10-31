import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Card from './src/components/card';
import users from './assets/data/users';

import AnimatedStack from './src/components/AnimatedStack';

const App = gestureHandlerRootHOC(() => {
  return (
    <View style={styles.pageContainer}>
      <AnimatedStack 
        data={users}
        renderItem={(({item}) => <Card user={item} />)}
      />
      <View style={styles.navbar}>
        <Icon name='cards-diamond' style={styles.navIcon}/>
        <Icon name='cards-club' style={styles.navIcon}/>
        <Icon name='cards' style={styles.navIcon}/>
      </View>
    </View>
  );
},);

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    maxWidth: '100%',
  },

  navIcon: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },

  navbar: {
    flex: 5,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    backgroundColor: '#3ec9c4',
    justifyContent: 'space-evenly',    
  },
});

export default App;