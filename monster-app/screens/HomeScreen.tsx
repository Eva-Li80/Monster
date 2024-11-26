import React from "react";
import { View, Button, ScrollView, Text, Image, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeText}>Hej, Välkommen till monster appen!</Text>
        <Image source={require("../assets/monstersss.jpg")} style={styles.monsterImage} />
        <Button
          title="Visa alla monster"
          onPress={() => navigation.navigate("Monsters")}
        />
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

export default HomeScreen;
