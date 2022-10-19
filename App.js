import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './src/components/card';
import users from './assets/data/users';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const App = () => {
  const translationX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translationX.value,
      },
    ]
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      console.warn('Touch Start');
    },
    onActive: event => {
      translationX.value = event.translationX;
    },
    onEnd: () => {
      console.warn('Touch Ended');
    },
  });

  return (
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <Card user={users[2]}/>
        </Animated.View>
      </PanGestureHandler>
      
      <View style={styles.navbar}>
        <Icon name='cards-diamond' style={styles.navIcon}/>
        <Icon name='cards-club' style={styles.navIcon}/>
        <Icon name='cards' style={styles.navIcon}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },

  animatedCard: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginBottom: -92,
  },

  navIcon: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 6,
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

export default App;