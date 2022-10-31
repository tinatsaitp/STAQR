import React from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = (props) => {
  const {image, content} = props.user;
  return (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <ImageBackground source={{
            uri: image,
            }}
            style={styles.image}>
            <Text style={styles.content}>{content}</Text>
            </ImageBackground>
            <View style={styles.numBar}>
            <Text style={styles.num}> 1.1K </Text>
            <Text style={styles.num}> 1.1K </Text>
            </View>
            <View style={styles.numBar}>
            <Icon name='cards-heart' style={styles.numIcon}/>
            <Icon name='cards-spade' style={styles.numIcon}/>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    height: '85%',
    borderRadius: 20,
    backgroundColor: '#afeeee',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,

    elevation: 8,
  },

  card: {
    marginTop: 20,
    width: '90%',
    height: '85%',
    borderRadius: 20,
  },
  
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },

  content: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    lineHeight: 25,
    padding: 10,
  },

  numBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  num:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3ec9c4',
  },

  numIcon: {
    fontSize: 40,
    color: '#3ec9c4',
  },

  navIcon: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 7,
  },

  navbar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    backgroundColor: '#3ec9c4',
    justifyContent: 'space-evenly',    
  },
});

export default Card;