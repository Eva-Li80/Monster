import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './tabs'; 
import HomeScreen from '../screens/HomeScreen';
import Monsters from '../screens/Monsters';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Tabs" 
        component={MyTabs} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Home Screen', 
          headerBackVisible: true,
          headerBackTitle: 'Back', 
        }}
      />
      <Stack.Screen 
        name="Monsters" 
        component={Monsters} 
        options={{
          title: 'Monsters',
          headerBackVisible: true,
          headerBackTitle: 'Back', 
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
