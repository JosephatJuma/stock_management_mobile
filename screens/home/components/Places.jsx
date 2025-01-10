import { FlashList } from "@shopify/flash-list";
import { RefreshControl, View } from "react-native";
import React from "react";
import { Card, Icon, IconButton } from "react-native-paper";

const places = [
  {
    id: 1,
    type: "restaurant",
    name: "Breen Cafe",
    location: "Naalya, Worship Harves",
    image:
      "https://cafeesme.com/wp-content/themes/CafeEsme/img/cafe-esme-5.jpg",
  },
  {
    id: 2,
    type: "barbershop",
    name: "West Side Barbershop",
    location: "Kyaliwajala",
    image:
      "https://burlingtondowntown.ca/wp-content/uploads/2021/10/barbershops-downtown-burlington-thegem-blog-default.jpg",
  },
  {
    id: 3,
    type: "restaurant",
    name: "Cafe",
    location: "Harves",
    image:
      "https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg",
  },
  {
    id: 4,
    type: "salon",
    name: "Fryer Salon",
    location: "Harves",
    image:
      "https://www.checkatrade.com/blog/wp-content/uploads/2023/10/salon-glamorous.jpg",
  },
  {
    id: 5,
    type: "Botique",
    name: "Botique",
    location: "Harves",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/13/ed/f5/c7/botique.jpg",
  },
];

const Places = () => {
  const RenderPlace = ({ place }) => (
    <Card style={{ height: 300, width: 200, margin: 5 }}>
      <Card.Cover source={{ uri: place.image }} />
      <Card.Content>
        <Card.Title title={place.name} subtitle={place.location} />
      </Card.Content>
    </Card>
  );

  return (
    <FlashList
      refreshControl={
        <RefreshControl
          onRefresh={() => console.log("Refreshed")}
          size="default"
          title="Reloading"
        />
      }
      renderItem={({ item }) => <RenderPlace place={item} />}
      horizontal={true}
      estimatedItemSize={50}
      data={places}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      onEndReachedThreshold={5}
      //windowSize={5}
      removeClippedSubviews={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Places;
