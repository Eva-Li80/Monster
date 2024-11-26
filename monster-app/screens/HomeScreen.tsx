import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import ButtonNavigate from "../components/Button";

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
        <ButtonNavigate
          title="Visa alla monster"
          navigate={() => navigation.navigate("Monsters")}
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
    padding: 20
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 40,
    color: "white",
    backgroundColor: "gray",
    padding: 30,
    borderWidth: 2,
    borderColor: "orange"
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
