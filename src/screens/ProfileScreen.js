import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuWindow from './MenuWindow';
import Card from '../components/card';

const Profile = () => {
const image = {uri: "https://cdn.discordapp.com/attachments/1014586144681373738/1042186131443286096/STAQR_Blue_Vary.png"};
  return(
    <View style={styles.root}>
        <View style={styles.iconBar}>
            <Icon name='chevron-left' style={styles.backIcon}/>
            <MenuWindow />
        </View>
                
        <View style={styles.profileContainer}>
            <Image
                source={image}
                style={styles.image}
            />
            
            <Text style={styles.username}> STAQR </Text>
        
            <View style={styles.bioNumBar}>
                <Text style={styles.bioNum}> 2 </Text>
                <Text style={styles.bioNum}> 27 </Text>
            </View>
            <View style={styles.bioNumBar}>
                <Text style={styles.bioNumText}> Liked Posts </Text>
                <Text style={styles.bioNumText}> Followers </Text>
            </View>
        </View>

        <View style={{borderWidth: StyleSheet.hairlineWidth, width:'100%',}}></View>

        <View style={styles.contentContainer}>
        </View>
        
      </View>
  );
};


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },

    iconBar: {
        elevation: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor: 'blue',
    },

    backIcon: {
        fontSize: 35,
        color: 'black',
    },

    profileContainer: {
        elevation: 0,
        alignItems: 'center',
        width: '100%',
        padding: 20,
        //backgroundColor: 'pink',
    },

    image: {
        alignItems: 'center',
        height: 120,
        width: 120,
        backgroundColor: '#afeeee',
        borderRadius: 60,
    },

    username: {
        fontSize:25,
        color: 'black',
        fontWeight:'bold',
        marginBottom: 20,
    },

    bioNumBar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        //backgroundColor: 'yellow',
    },

    bioNum: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: 'black',
    },

    bioNumText: {
        fontSize:20,
        color: '#3ec9c4',
        fontWeight: 'bold',
    },

    contentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#afeeee',
    },
});

export default Profile;
