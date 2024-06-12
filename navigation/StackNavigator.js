import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import AddScreen from "../screens/AddScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{
          presentation: "modal",
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
}
