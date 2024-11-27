import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setActiveMonster } from "../redux/monsterSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Monster, RootStackParamList } from "../types/types";
import { ScrollView } from "react-native-gesture-handler";
import ButtonNavigate from "../components/Button";
import imageMapping from "../utils/imgaMapping";
type MonstersNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Feed"
>;

type Props = {
  navigation: MonstersNavigationProp;
};

const SwithMonsterAcccount = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const monsters = useSelector((state: RootState) => state.monsters.monsters);

  const handleMonster = (monster: Monster | null) => {
    dispatch(setActiveMonster(monster));
    navigation.navigate("Feed", {monster});
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Välj ditt Monster</Text>
      <View style={styles.container}>
        <View>
          {monsters.map((m) => (
            <TouchableOpacity key={m.id} onPress={() => handleMonster(m)}>
              <View style={styles.container}>
                <Image
                  style={styles.monsterImage}
                  source={imageMapping[m.image]}
                />
              </View>
             <Text style={styles.monsterName}>{`Välj ${m.name}`} ⬆️</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  monsterImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  monsterName: {
    marginBottom: 40,
    fontSize: 20,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },

});

export default SwithMonsterAcccount;
