import App from "./App";
import {
  PaperProvider,
  DefaultTheme,
  MD3DarkTheme,
  useTheme,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

export default function Application() {
  const { theme } = useSelector((state) => state.theme);
  const { colors } = useTheme();
  return (
    <PaperProvider theme={theme === "dark" ? MD3DarkTheme : DefaultTheme}>
      <StatusBar
        style={theme === "dark" ? "light" : "dark"}
        backgroundColor={theme === "dark" ? "transparent" : colors.background}
      />
      <App />
    </PaperProvider>
  );
}
