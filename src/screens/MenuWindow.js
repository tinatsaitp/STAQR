import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-popup-menu';


const MenuWindow = () => {
  return(
    <View style={styles.root}>
        <MenuProvider>
            <Menu style={styles.settingContainer}>
                <MenuTrigger>
                    <Icon name='dots-horizontal' size = {35} color='black'/>
                </MenuTrigger>
                <MenuOptions style={styles.settingWindow}>
                    <MenuOption onSelect={() => alert('Settings')}>
                    <Text style={styles.settingWindowText}>Settings</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert('Privacy')}>
                    <Text style={styles.settingWindowText}>Privacy</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert('Logging Out ...')}>
                    <Text style={styles.settingWindowLogout}>Log Out</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </MenuProvider>       
    </View> 
  );
};


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flex: 1,
    },

    settingContainer: {
        marginLeft: 321,
        //backgroundColor: 'purple',
    },

    settingWindow: {
        marginLeft: 97,
        position: 'absolute',
        //backgroundColor: 'lightpink',
    },

    settingWindowText: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 15,
    },

    settingWindowLogout: {
        color: '#3ec9c4',
        fontWeight: 'bold',
        fontSize: 15,
    },
})

export default MenuWindow;
