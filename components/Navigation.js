// import React, { Component } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from "./HomeScreen";
// import Web from "./Web";

// const Tab = createBottomTabNavigator();

// export default function Navigation() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Dam" component={Web} />
//     </Tab.Navigator>
//   );
// }

import * as React from "react";
import {
  Button,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import Web from "./Web";
import EditScreen from "./EditScreen";

const Drawer = createDrawerNavigator();

const onPressEdit = () => {
  console.log("hi");
};

export default function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Edit" component={EditScreen} />
      <Drawer.Screen name="Dam" component={Web} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    bottom: 0,
  },
});
