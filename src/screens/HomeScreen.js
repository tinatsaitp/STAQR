import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/card';
import users from '../../assets/data/users';
import AnimatedStack from '../components/AnimatedStack';



const HomeScreen = ({navigation}) => {

  const profilePage = () => navigation.navigate('Profile');
  
  return (
    <View style={styles.root}>
      <AnimatedStack
        data={users}
        renderItem={(({item}) => <Card user={item} />)}
      />
      <View style={styles.navbar}>
        <Icon name='cards-diamond' style={styles.navIcon}/>
        <Icon name='cards-club' style={styles.navIcon}/>
        <Icon name='cards' style={styles.navIcon} onPress={profilePage}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },

  navIcon: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },

  navbar: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    backgroundColor: '#3ec9c4',
    justifyContent: 'space-evenly',   
  },
});

export default HomeScreen;
