import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import store from "./store/store";
import Application from "./main";

const Main = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};
registerRootComponent(Main);
