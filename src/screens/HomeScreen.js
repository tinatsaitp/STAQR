import React from 'react';
import {View} from 'react-native';
import Card from '../components/card';
import users from '../../assets/data/users';

import AnimatedStack from '../components/AnimatedStack';

const HomeScreen = () => {
  return (
    <View>
      <AnimatedStack 
        data={users}
        renderItem={(({item}) => <Card user={item} />)}
      />
    </View>
  );
};

export default HomeScreen;