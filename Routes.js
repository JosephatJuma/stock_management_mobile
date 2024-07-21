import { useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
const Stack = createStackNavigator();
import Settings from "./screens/settings/Settings";
import { useSelector, useDispatch } from "react-redux";
import HomeTabsScreen from "./screens/HomeTabsScreen";
const Routes = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <NavigationContainer
      independent={true}
      //linking={linking}
      //fallback={<Authenticating />}
      theme={theme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="HomeTabs" component={HomeTabsScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
