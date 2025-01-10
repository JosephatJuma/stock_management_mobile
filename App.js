import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./Routes";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
export default function App() {
  const { colors } = useTheme();
  const { theme } = useSelector((state) => state.theme);
  const handleSetNavigationColor = async () => {
    await NavigationBar.setBackgroundColorAsync(colors.background);
  };
  useEffect(() => {
    handleSetNavigationColor();
  }, [theme]);
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
