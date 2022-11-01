import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Navbar = () => {
  return (
    <View style={styles.root}>
      <View style={styles.navbar}>
        <Icon name='cards-diamond' style={styles.navIcon}/>
        <Icon name='cards-club' style={styles.navIcon}/>
        <Icon name='cards' style={styles.navIcon}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flex: 1,
    },
    
    navIcon: {
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },

    navbar: {
        flex: 2,
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        marginTop: 20,
        backgroundColor: '#3ec9c4',
        justifyContent: 'space-evenly', 
    },
});

export default Navbar;