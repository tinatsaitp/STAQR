import React from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UploadScreen = ({navigation}) => {  
  const homepage = () => navigation.navigate('Home');

  const styles = StyleSheet.create({
    root: {
      height: "100%",
      padding: 10,
      backgroundColor: "lightblue",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch"
    },

    textField: {
      marginBottom: 20,
      backgroundColor: "white",
      borderRadius: 20,
      width: "100%",
      textAlign: "center"
    },

    backButton: {
        fontSize: 35,
        color: 'black',
        flex: 1
    },

    buttonStyle: {
      color: "white",
      backgroundColor: "gray",
      padding: 15,
      textAlign: "center",
      borderWidth: 5,
      borderRadius: 20,
      // borderColor: "blue"
    }
  });

  return (
    <View style={styles.root}>
      <Icon name='chevron-left' style={styles.backButton} onPress={homepage}/>

      <TextInput style={styles.textField} placeholder="Image URL"></TextInput>    
      <TextInput style={styles.textField} placeholder="Image Caption"></TextInput>
      <Pressable onPress={homepage}>
        <Text style={styles.buttonStyle}>Upload</Text>
      </Pressable>
    </View>
  )
}

export default UploadScreen;