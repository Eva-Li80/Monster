import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}



