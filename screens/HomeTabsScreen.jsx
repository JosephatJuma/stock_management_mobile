import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./home/HomeScreen";
import { BackHandler, Alert } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import Messages from "./messages/Messages";
import Vibes from "./vibes/Vibes";
import Profile from "./profile/Profile";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const HomeTabsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    //confirm if user wants to exit
    const backAction = () => {
      const state = navigation.getState();
      if (state.routes[state.index].state) {
        if (state.routes[state.index].state.index > 0) {
          //there are more screens in stack
          navigation.goBack();
          return true;
        }
        //no more screens in stack
        Alert.alert(
          "Hold on!",
          "Are you sure you want to exit Stylishy?",

          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            {
              text: "YES",
              onPress: () => BackHandler.exitApp(),
              style: "destructive",
            },
          ],
          {
            cancelable: false,
            userInterfaceStyle: "light",
          }
        );
        return true;
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <Tab.Navigator
      inactiveColor="gray"
      shifting={false}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Home")
            return <Fontisto name="nursing-home" size={24} color={color} />;
          else if (route.name === "Products") {
            return (
              <MaterialCommunityIcons name="store" size={24} color={color} />
            );
          } else if (route.name === "Sales") {
            return (
              <MaterialCommunityIcons name="sale" size={24} color={color} />
            );
          } else if (route.name === "Settings") {
            return <Ionicons name="cog" size={24} color={color} />;
          } else if (route.name === "Categories") {
            return <MaterialIcons name="category" size={24} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={Vibes} />
      <Tab.Screen name="Products" component={Messages} />
      <Tab.Screen name="Sales" component={Messages} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTabsScreen;
