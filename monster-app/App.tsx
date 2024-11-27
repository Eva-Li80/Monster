import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
