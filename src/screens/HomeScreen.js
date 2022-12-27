import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/card';
import AnimatedStack from '../components/AnimatedStack';

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {

  const profilePage = () => navigation.navigate('Profile');
  const uploadPage = () => navigation.navigate('Upload');

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/posts', {secure: true})
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.root}>
      <AnimatedStack
        data={data}
        renderItem={(({item}) => <Card user={item} />)}
      />
      <View style={styles.navbar}>
        <Icon name='cards-diamond' style={styles.navIcon}/>
        <Icon name='cards-club' style={styles.navIcon} onPress={uploadPage}/>
        <Icon name='cards' style={styles.navIcon} onPress={profilePage}/>
      </View>
    </View>
  );

  // return (
  //   <View>
  //     <FlatList
  //       data={data}
  //       renderItem={({ item }) => <Text>{item.name}</Text>}
  //       keyExtractor={item => item.id}
  //     />
  //   </View>
  // );
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