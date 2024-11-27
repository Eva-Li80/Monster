import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { View , Text} from 'react-native'
import { RootStackParamList } from '../types/types';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/native';

type MonsterRouteProp = RouteProp<RootStackParamList, 'Monster'>;

const Monster = () => {
  const route = useRoute<MonsterRouteProp>();
  const { monster } = route.params;
  return (
 <View><Text>hej monster {monster.name} </Text></View>
  )
}

export default Monster
