import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import navigationString from "./navigationString";
import * as Screens from "../Screens";


const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: "center" }}
          name={navigationString.PROFILE}
          component={Screens.Profile}
        />
        <Stack.Screen
          name={navigationString.EXPERTISE}
          component={Screens.Expertise}
        />
       
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Routes;
