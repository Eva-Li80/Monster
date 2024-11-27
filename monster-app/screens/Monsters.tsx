import React from 'react';
import { View, ScrollView, Pressable , StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MonsterCard from '../components/MonsterCard'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import imageMapping from '../utils/imgaMapping';

type MonstersNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Monsters'>;

type Props = {
  navigation: MonstersNavigationProp;
};

const Monsters = ({ navigation }: Props) => {
  const monsters = useSelector((state: RootState) => state.monsters.monsters);

  return (
    <View style={styles.container}>
      <ScrollView>
        {monsters.map((monster) => (
          <Pressable
            key={monster.id}
            onPress={() => {
              navigation.navigate('Monster', {monster});
            }}
          >
            <MonsterCard
              img={imageMapping[monster.image]}
              title={monster.name}
              color={monster.color}
              eyes={monster.eyes}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 40
  },
  monsterImage: {
    marginTop: 50,
    width: "100%", 
    height: 300, 
    resizeMode: "contain", 
    marginBottom: 50,
  },
});

export default Monsters;



