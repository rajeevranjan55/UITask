import React from "react";
import { View, Text, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Screens from "../Screens";
import navigationString from "./navigationString";
import { NavigationContainer } from "@react-navigation/native";
import imagePath from "../constants/imagePath";

// import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const TabRoutes = ({ navigation }) => {
  return (
    <View>
      <Screens.MyBooking />

    
        <Tab.Navigator>
          <Tab.Screen
            name={navigationString.UPCOMING}
            component={Screens.Upcoming}
          />
          <Tab.Screen
            name={navigationString.ONGOING}
            component={Screens.OnGoing}
          />
          <Tab.Screen name={navigationString.PAST} 
          component={Screens.Past} />
        </Tab.Navigator>
   
    </View>
  );
};

export default TabRoutes;
