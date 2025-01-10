import React, { useEffect, useState, useRef, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./home/HomeScreen";
import { useSelector, useDispatch } from "react-redux";
import { BackHandler, Alert } from "react-native";
import io from "socket.io-client";
import Settings from "./settings/Settings";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import Messages from "./messages/Messages";
import Vibes from "./vibes/Vibes";
import Profile from "./profile/Profile";
import { TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { useTheme, Avatar } from "react-native-paper";
const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {
  const { colors } = useTheme();
  const [newMessages, setNewMessages] = useState([]);
  const navigation = useNavigation();

  const MessagesTab = () => {
    return <Messages />;
  };
  //initializeDatabase().catch((error) => setConnectionError(error?.message));

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
        tabBarAndroidRipple: { borderless: true },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home")
            return <Fontisto name="nursing-home" size={24} color={color} />;
          else if (route.name === "Products") {
            return (
              <MaterialCommunityIcons name="store" size={24} color={color} />
            );
          } else if (route.name === "Profile") {
            return (
              <Avatar.Image
                source={{
                  uri: "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
                }}
                size={35}
                style={{ backgroundColor: color }}
              />
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
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",

        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "capitalize",
          fontWeight: "700",
        },

        tabBarBadgeStyle: { backgroundColor: colors.elevation.level5 },
        tabBarStyle: {
          height: 65,
          backgroundColor: colors.background,
        },

        tabBarButton: (props) => (
          <TouchableRipple
            {...props}
            hitSlop={{ top: 20, bottom: 10, left: 20, right: 20 }}
            borderless={true}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={Vibes} />
      <Tab.Screen name="Products" component={MessagesTab} />
      <Tab.Screen name="Sales" component={MessagesTab} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTabsScreen;
