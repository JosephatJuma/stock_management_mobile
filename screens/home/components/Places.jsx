import { FlashList } from "@shopify/flash-list";

import { RefreshControl, View } from "react-native";
import React from "react";
import { Card, IconButton } from "react-native-paper";
const places = [
  {
    id: 1,
    type: "restaurant",
    name: "Breen Cafe",
    location: "Naalya, Worship Harves",
  },
  {
    id: 2,
    type: "barbershop",
    name: "West Side Barbershop",
    location: "Kyaliwajala",
  },
  {
    id: 3,
    type: "restaurant",
    name: "Cafe",
    location: "Harves",
  },
  {
    id: 4,
    type: "salon",
    name: "Fryer Salon",
    location: "Harves",
  },
  {
    id: 5,
    type: "Sauna",
    name: "Sauna",
    location: "Harves",
  },
];
const Places = () => {
  const RenderPlace = ({ place }) => {
    <Card style={{ height: 200, margin: "auto" }}>
      <Card.Content></Card.Content>
      <Card.Actions></Card.Actions>
    </Card>;
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlashList
        refreshControl={
          <RefreshControl
            onRefresh={() => console.log("Refreshed")}
            size="default"
            title="Relaoding"
          />
        }
        renderItem={({ item }) => {
          return <RenderPlace place={item} />;
        }}
        horizontal={true}
        estimatedItemSize={50}
        data={places}
        //numColumns={2}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onEndReachedThreshold={5}
        windowSize={5}
        removeClippedSubviews={true}
        style={{ flex: 1, backgroundColor: "red", height: 500 }}
      />
    </View>
  );
};

export default Places;
