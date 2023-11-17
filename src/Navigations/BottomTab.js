import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as Screens from "../Screens";
import TabRoutes from "./TabRoutes";
import imagePath from "../constants/imagePath";
import Routes from "./Routes";
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{headerShown:false,
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{ height: 30, width: 30,tintColor:focused?"red":"grey" }}
                    source={imagePath.home}
                  />
                </View>
              );
            },
            tabBarActiveTintColor: "red",
          }}
          name="Home"
          component={Routes}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{ height: 30, width: 30,tintColor:focused?"red":"grey" }}
                    source={imagePath.booking}
                  />
                </View>
              );
            },
            tabBarActiveTintColor: "red",
          }}
          name="Bookings"
          component={TabRoutes}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: "red",
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{ height: 30, width: 30 ,tintColor:focused?"red":"grey"}}
                    source={imagePath.chats}
                  />
                </View>
              );
            },
          }}
          name="Chats"
          component={Screens.Chats}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: "red",
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{ height: 30, width: 30 ,tintColor:focused?"red":"grey"}}
                    source={imagePath.account}
                  />
                </View>
              );
            },
          }}
          name="Account"
          component={Screens.Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
