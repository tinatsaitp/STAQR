import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput, Dimensions, Pressable} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, withSequence, withSpring} from 'react-native-reanimated';

const LoginScreen = () => {
  const image = {uri: "https://cdn.discordapp.com/attachments/1014586144681373738/1042290324275482644/login_image.jpg"};
  const {width, height} = Dimensions.get('window');
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0])
    return {
      transform: [
        {translateY: withTiming(interpolation, {duration: 1000})}
      ]
    }
  })

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [
        {translateY: withTiming(interpolation, {duration: 1000})}
      ]
    }
  })

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
    }
  })

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})): withTiming(0, {duration: 300}),
    }
  })

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: formButtonScale.value}
      ]
    }
  })

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      setIsRegistering(false);
    }
  }
  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      setIsRegistering(true);
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
          <ImageBackground
            source={image}
            style={styles.image}>
          </ImageBackground>
          <Animated.View style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
            <Text onPress={() => imagePosition.value = 1}> X </Text>
          </Animated.View>
      </Animated.View>
      
      
        
      <View style={styles.buttonContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}> LOGIN </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}> REGISTER </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={[styles.formContainer, formAnimatedStyle]}>
          <TextInput placeholder='Username' placeholderTextColor='#3ec9c4' style={styles.textInput} />
          <TextInput placeholder='Password' placeholderTextColor='#3ec9c4' style={styles.textInput} />
          {isRegistering && (
            <TextInput placeholder='Email' placeholderTextColor='#3ec9c4' style={styles.textInput} />
          )}

          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={() => formButtonScale.value = withSequence(withSpring(1.1), withSpring(1))}>
              <Text style={styles.buttonText}> {isRegistering ? 'REGISTER' : 'LOGIN'} </Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    //backgroundColor: 'yellow',
  },

  image: {
    flex: 1,
    //height: '120%',
  },

  closeButtonContainer: {
    marginTop: -20,
    marginBottom: -40,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#afeeee',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 8,
  },

  buttonContainer: {
    zIndex: 1,
    justifyContent: 'center',
    height: 280,
    width: '100%',
    alignItems: 'center',
    //backgroundColor: 'pink',
  },

  button: {
    backgroundColor : '#afeeee',
    height: 55,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#3ec9c4',
    marginHorizontal: 20,
    marginVertical: 5,
  },

  buttonText: {
    fontSize: 20,
    color: '#3ec9c4',
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },

  formContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
  },

  textInput: {
    height: 55,
    width: 350,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#3ec9c4',
    marginHorizontal: 20,
    marginVertical: 5,
    paddingLeft: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },

  formButton: {
    backgroundColor : '#afeeee',
    height: 55,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#3ec9c4',
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export default LoginScreen;
