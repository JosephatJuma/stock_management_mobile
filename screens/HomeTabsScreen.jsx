import React, { useEffect, useState, useRef, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./home/HomeScreen";
import { useSelector, useDispatch } from "react-redux";

import io from "socket.io-client";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Messages from "./messages/Messages";
import Vibes from "./vibes/Vibes";
import Profile from "./profile/Profile";
import { TouchableRipple } from "react-native-paper";

import { useTheme } from "react-native-paper";
const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {
  const { colors } = useTheme();
  const [newMessages, setNewMessages] = useState([]);

  const MessagesTab = () => {
    return <Messages />;
  };
  //initializeDatabase().catch((error) => setConnectionError(error?.message));
  return (
    <Tab.Navigator
      inactiveColor="gray"
      shifting={false}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarAndroidRipple: { borderless: true },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home")
            return (
              <MaterialCommunityIcons name={"home"} size={25} color={color} />
            );
          else if (route.name === "Vybes") {
            return (
              <MaterialCommunityIcons
                name="party-popper"
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <MaterialIcons name="account-circle" size={24} color={color} />
            );
          } else if (route.name === "Messages") {
            return <Ionicons name="chatbubbles" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",

        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: "capitalize",
          fontWeight: "700",
        },
        tabBarBadge:
          route.name === "Messages"
            ? newMessages.length > 0
              ? newMessages.length
              : 10
            : null,
        tabBarBadgeStyle: { backgroundColor: colors.elevation.level5 },
        tabBarStyle: {
          height: 60,
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
      <Tab.Screen name="Vybes" component={Vibes} />
      <Tab.Screen name="Messages" component={MessagesTab} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTabsScreen;
