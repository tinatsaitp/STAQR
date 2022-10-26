import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './src/components/card';
import users from './assets/data/users';
import {snapPoint} from "react-native-redash";
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  interpolate,
} from 'react-native-reanimated';
import {gestureHandlerRootHOC, PanGestureHandler} from 'react-native-gesture-handler';

const App = gestureHandlerRootHOC(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [middleCardIndex, setMiddleCardIndex] = useState(currentIndex + 1);
  const [backCardIndex, setBackCardIndex] = useState(middleCardIndex + 1);
  const currentProfile = users[currentIndex];
  const middleCardProfile = users[middleCardIndex];
  const backCardProfile = users[backCardIndex];

  const {width: screenWidth, height: screenHeight} = useWindowDimensions();
  const SNAP_POINTS_X = [-screenWidth, 0, screenWidth];
  const SNAP_POINTS_Y = [-screenHeight, 0, screenHeight];
  //const hiddenTranslate = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const midRotate = useDerivedValue(() => interpolate(
    translateX.value,
    [-screenWidth, 0, screenWidth],
    [0, 5, 0]) + 'deg',  
  );
  const midScale = useDerivedValue(() => interpolate(
    translateX.value,
    [-screenWidth, 0, screenWidth],
    [1, 0.9, 1]),
  );
  const backRotate = useDerivedValue(() => interpolate(
    translateX.value,
    [-screenWidth, 0, screenWidth],
    [5, 0, 5]) + 'deg',  
  );
  const backScale = useDerivedValue(() => interpolate(
    translateX.value,
    [-screenWidth, 0, screenWidth],
    [0.9, 0.8, 0.9]),
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      const destX = snapPoint(translateX.value, velocityY, SNAP_POINTS_X);
      const destY = snapPoint(translateY.value, velocityX, SNAP_POINTS_Y);
      translateX.value = withSpring(destX, {velocity: velocityX});
      translateY.value = withSpring(destY, {velocity: velocityY});
    },
  });

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translateX.value,},
      {translateY: translateY.value,},
    ],
  }));

  const middleCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: midScale.value,
      },
      {
        rotate: midRotate.value,
      },
    ],
  }));

  const backCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: backScale.value,
      },
      {
        rotate: backRotate.value,
      },
    ],
}));





  return (
    <View style={styles.pageContainer}>
      <View style={styles.backCard}>
        <Animated.View style={[styles.animatedCard, backCardStyle]}>
          <Card user={backCardProfile}/> 
        </Animated.View> 
      </View>

      <View style={styles.middleCard}>
        <Animated.View style={[styles.animatedCard, middleCardStyle]}>
          <Card user={middleCardProfile}/> 
        </Animated.View>        
      </View>

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <Card user={currentProfile}/>
        </Animated.View>
      </PanGestureHandler>
            
      <View style={styles.navbar}>
        <Icon name='cards-diamond' style={styles.navIcon}/>
        <Icon name='cards-club' style={styles.navIcon}/>
        <Icon name='cards' style={styles.navIcon}/>
      </View>
    </View>
  );
},);

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

  middleCard: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginBottom: -92,
  },

  backCard: {
    position: 'absolute',
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