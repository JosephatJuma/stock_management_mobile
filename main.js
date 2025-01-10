import App from "./App";
import {
  PaperProvider,
  DefaultTheme,
  MD3DarkTheme,
  useTheme,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function Application() {
  const { theme } = useSelector((state) => state.theme);
  const { colors } = useTheme();

  const lightTheme = {
    ...DefaultTheme, // or MD3DarkTheme
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#0F9D58",
      navIcons: "#0F9D58",
    },
  };

  const darkTheme = {
    ...MD3DarkTheme,
    roundness: 2,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "#5CB6F9",
      navIcons: "#fff",
    },
  };

  return (
    <PaperProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <StatusBar
        style={theme === "dark" ? "light" : "dark"}
        backgroundColor={theme === "dark" ? "transparent" : colors.background}
      />
      <App />
    </PaperProvider>
  );
}
