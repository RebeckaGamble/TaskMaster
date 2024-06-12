import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function AppNavigatior() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Add") {
              iconName = focused ? "pluscircleo" : "pluscircleo";
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === "Details") {
              iconName = focused ? "tasks" : "tasks";
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#d40da3",
          inactiveTintColor: "#9BA1A6",
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackNavigator}
          options={{
            title: "Home",
            headerShown: null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
