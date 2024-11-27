import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ButtonNavigate from "../components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { FontAwesome } from "@expo/vector-icons";

type MonstersNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Feed'>;

type Props = {
  navigation: MonstersNavigationProp;
};


const Feed = ({navigation}: Props) => {
  const activeMonster = useSelector((state: RootState) => state.monsters.activeMonster);
  const posts = useSelector((state: RootState) => state.Posts.allPosts);

  return (
    <View style={styles.container}>
      {activeMonster ? (
        <View style={styles.activeMonster}>
          <Text style={styles.monsterName}> Välkommen {activeMonster.name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <Text style={styles.addbtn}>
                Add new post <FontAwesome name="plus" size={30} color={"orange"} />
              </Text>
            </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.noMonster}>Inget monster valt</Text>
      )}
      <Text style={styles.feedTitle}>Allas monsters inlägg kan du se här:</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postAuthor}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  activeMonster: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  monsterImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
  },
  monsterName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noMonster: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  feedTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  post: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  postAuthor: {
    fontWeight: "bold",
  },
  addbtn:{
    fontSize: 24,
    marginLeft: 50,
    color: "green"
  }
});

export default Feed;
