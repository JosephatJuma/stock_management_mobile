import { View } from "react-native";
import React from "react";

import { Appbar, Card, Text } from "react-native-paper";
import Places from "./components/Places";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <Appbar.Header>
        <Appbar.Content title="Stylishy" titleStyle={{ fontWeight: "bold" }} />
        <Appbar.Action icon="magnify" onPress={() => console.log("Pressed")} />
        <Appbar.Action icon="bell" onPress={() => console.log("Pressed")} />
        <Appbar.Action
          icon="cog"
          onPress={() => navigation.navigate("Settings")}
        />
      </Appbar.Header>
      <Card className={"m-2"}>
        <Card.Content>
          <Text>Hi Josephat</Text>
        </Card.Content>
      </Card>
      <Places />
    </View>
  );
};

export default HomeScreen;
