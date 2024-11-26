import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import HomeScreen from '../screens/HomeScreen';
import AddMonster from '../screens/AddMonster';
import Feed from '../screens/Feed';
import SwithMonsterAcccount from '../screens/SwithMonsterAcccount';
import Monsters from '../screens/Monsters';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue', 
        tabBarInactiveTintColor: 'gray', 
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} /> 
          ),
        }} 
      />
       <Tab.Screen 
        name="Monsters" 
        component={Monsters} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="industry" size={size} color={color} /> 
          ),
        }} 
      />
      <Tab.Screen 
        name="Feed" 
        component={Feed} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="comments" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Add Monster" 
        component={AddMonster} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" size={size} color={color} /> 
          ),
        }} 
      />
      <Tab.Screen 
        name="Swith Account" 
        component={SwithMonsterAcccount} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} /> 
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
