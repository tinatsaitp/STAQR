import React, {useEffect, useState} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {gestureHandlerRootHOC, PanGestureHandler} from 'react-native-gesture-handler';



const AnimatedStack = gestureHandlerRootHOC((props) => {
  const {data, renderItem} = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [middleCardIndex, setMiddleCardIndex] = useState(currentIndex + 1);
  const [backCardIndex, setBackCardIndex] = useState(middleCardIndex + 1);
  
  const currentProfile = data[currentIndex];
  const middleCardProfile = data[middleCardIndex];
  const backCardProfile = data[backCardIndex];

  const {width: screenWidth} = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;
  //const SNAP_POINTS_X = [-(screenWidth*2), 0, screenWidth*2];
  //const SNAP_POINTS_Y = [-(screenHeight*2), 0, screenHeight*2];

  const translateX = useSharedValue(0);
  //const translateY = useSharedValue(0);

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
    [5, -10, 5]) + 'deg',  
  );
  const backScale = useDerivedValue(() => interpolate(
    translateX.value,
    [-screenWidth, 0, screenWidth],
    [0.9, 0.8, 0.9]),
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
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

  

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      //context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      //translateY.value = context.startY + event.translationY;
    },
    /*onEnd: ({velocityX, velocityY}) => {
      const destX = snapPoint(translateX.value, velocityY, SNAP_POINTS_X);
      //const destY = snapPoint(translateY.value, velocityX, SNAP_POINTS_Y);
      translateX.value = withSpring(destX, {velocity: velocityX});
      //translateY.value = withSpring(destY, {velocity: velocityY});
      runOnJS(setCurrentIndex)(currentIndex + 1);
      runOnJS(setMiddleCardIndex)(middleCardIndex + 1);
      runOnJS(setBackCardIndex)(backCardIndex + 1);
    },*/
    onEnd: event => {
      if (Math.abs(event.velocityX) < 500) { //SWIPE_VELOCITY = 500
        translateX.value = withSpring(0);
        return;
      }
      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1),
        runOnJS(setMiddleCardIndex)(middleCardIndex + 1),
        runOnJS(setBackCardIndex)(backCardIndex + 1),
      );
    },
  });

  useEffect(() => {
    translateX.value = 0;
    //translateY.value = 0;
    setMiddleCardIndex(currentIndex + 1);
    setBackCardIndex(middleCardIndex + 1);
  }, [currentIndex, middleCardIndex, translateX]
  );

  return (
    <View style={styles.root}>
      {backCardProfile && (
        <View style={styles.backCard}>
          <Animated.View style={[styles.animatedCard, backCardStyle]}>
            {renderItem({ item: backCardProfile })}
          </Animated.View> 
        </View>
      )}
      
      {middleCardProfile && (
        <View style={styles.middleCard}>
          <Animated.View style={[styles.animatedCard, middleCardStyle]}>
            {renderItem({ item: middleCardProfile })}
          </Animated.View>        
        </View>
      )}

      {currentProfile && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            {renderItem({ item: currentProfile })}
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
},);

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '88%',
    //backgroundColor:'yellow',
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
});

export default AnimatedStack;
