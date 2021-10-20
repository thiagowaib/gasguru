import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import TabMenu from '../screens/TabMenu/index'
import TabConfig from '../screens/TabConfig/index'

import PageComp from "../screens/PageComp";

import BottomTab from '../components/BottomTab/index'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="TabMenu"
      screenOptions={() => ({
        headerShown: false,
      })}
      tabBar={() => (<BottomTab/>)}
    >
      <Tab.Screen name="Menu" component={TabMenu} />
      <Tab.Screen name="Config" component={TabConfig} />
    </Tab.Navigator>
  );
}

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PageComp" component={PageComp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
