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
import { useSelector, useDispatch } from "react-redux";
import HomeTabsScreen from "./screens/HomeTabsScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import OnBoardingScreen from "./screens/auth/OnBoardingScreen";
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
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
