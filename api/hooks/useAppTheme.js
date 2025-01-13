import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../store/slices/theme.slice";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAppTheme = () => {
  const { theme } = useSelector((state) => state.theme);
  const { colors } = useTheme();

  const dispatch = useDispatch();

  const defaultColors = {
    primary: theme === "dark" ? "#fff" : "#004AAD",
    background: theme === "dark" ? colors.background : "#fff",
    darkBackground: theme === "dark" ? colors.background : "#004AAD",
    tree: theme === "dark" ? colors.backdrop : "#d2fdec",
    chat: theme === "dark" ? colors.backdrop : "#d2fdec", //"#"
    navigator: colors.background, //"#f0f0f0"
    bubble: theme === "dark" ? colors.onSecondary : "#DCF8C6", //"#3a3b39"
    main: theme === "dark" ? "#000" : "#004AAD",
    text: theme === "dark" ? "#fff" : "#000",
    icon: theme === "dark" ? "#fff" : "#000",
    button: theme === "dark" ? colors.primary : "#004AAD",
    progressBar: theme === "dark" ? "#fff" : "#004AAD",
    defaulticon: theme === "dark" ? colors.primary : "#004AAD",
  };

  const handleChangeTheme = async (value) => {
    if (value === theme) {
      return;
    } else {
      dispatch(setTheme(value));
      await AsyncStorage.setItem("theme", value);
    }
  };

  const getThemeFromStore = async () => {
    const value = await AsyncStorage.getItem("theme");
    if (value) {
      dispatch(setTheme(value));
    }
  };
  return { handleChangeTheme, getThemeFromStore, defaultColors, theme };
};

export default useAppTheme;
