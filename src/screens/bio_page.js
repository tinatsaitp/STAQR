import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import card from './src/components/card';
import {Menu,MenuProvider,MenuOptions,MenuOption,MenuTrigger} from 'react-native-popup-menu';


const Bio = () => {
  return(
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft:10,
        }}>
          <Image
            style={{
              marginTop: -90,
              marginStart:130,
              height: 120,
              width: 120,
              backgroundColor: '#afeeee',
              borderRadius: 60,
            }}
            source={require('./assets/data/images/STAQR_Blue_Vary.png')}
            />
        <View>
          <Text style={{
            fontWeight: '400', 
            fontSize: 20, 
            color: 'black',
            marginLeft:-135,
            marginTop: 240,
            }}>
            2
          </Text>
          <Text style={{fontSize:20, color: '#3ec9c4', fontWeight: 'bold', marginLeft:-180,}}>
            Liked Posts
          </Text> 
        </View>
        <View>
          <Text style={{
            fontWeight: '400', 
            fontSize: 20, 
            color: 'black', 
            paddingHorizontal:10,
            marginLeft:-5,
            marginTop: 240,
            }}>
            27
          </Text>
          <Text style={{fontSize:20, color: '#3ec9c4', fontWeight: 'bold', marginLeft:-30,}}>
            Followers
          </Text> 
        </View>
        <View>
          <Text style={{fontSize:25, color: 'black', fontWeight:'bold', marginLeft:-158, marginTop:80,}}>
            STAQR
          </Text> 
        </View>
        </View>
        <View style={{borderWidth: StyleSheet.hairlineWidth, borderColor:'black', marginTop:20,}}>
           </View>
        <View>
        <Icon name='chevron-left' style={styles.backIcon}/>
        </View>
        <MenuProvider>
        <Menu style={styles.settingIcon}>
          <MenuTrigger>
          <Icon name='dots-horizontal' size = {35} color='black'/>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert('Settings')}>
              <Text style={{color:'grey',fontWeight:'bold',fontSize:15}}>Settings</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert('Privacy')}>
              <Text style={{color:'grey',fontWeight:'bold',fontSize:15}}>Privacy</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert('Logging Out ...')}>
              <Text style={{color:'#3ec9c4',fontWeight:'bold',fontSize:15}}>Log Out</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
        </MenuProvider>
      </View>
  )
}


const styles = StyleSheet.create({


  settingIcon: {
  fontSize: 35,
  color: 'black',
  fontWeight: 'bold',
  marginTop: -317,
  marginLeft: 340,
  },

  notificationIcon: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    marginTop: -146,
    marginLeft: 250,
  },
  
  backIcon: {
  fontSize: 35,
  color: 'black',
  fontWeight: 'bold',
  marginTop: -320,
  },

  cards: {
    position: 'absolute',
    height: '50%',
    width: '50%',
  }
})

export default Bio;
