import React, { ReactNode } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

interface Props {
  children?: ReactNode;
  title: String;
}
const Header = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={props.title} titleStyle={{ fontWeight: "bold" }} />
      {props.children}
    </Appbar.Header>
  );
};

export default Header;
