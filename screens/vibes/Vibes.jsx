import { View } from "react-native";
import React from "react";
import { Appbar, Card, Icon, Text, useTheme } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import numbro from "numbro";
const Vibes = () => {
  const { colors } = useTheme();
  const categories = [
    { id: 1, name: "Shoes & Sandals", products: 20 },
    { id: 2, name: "Clothing", products: 50 },
    { id: 3, name: "Electronics", products: 35 },
    { id: 4, name: "Home Appliances", products: 25 },
    { id: 5, name: "Furniture", products: 15 },
    { id: 6, name: "Books", products: 40 },
    { id: 7, name: "Toys & Games", products: 30 },
    { id: 8, name: "Beauty & Personal Care", products: 45 },
    { id: 9, name: "Sports & Outdoors", products: 20 },
    { id: 10, name: "Automotive", products: 10 },
    { id: 11, name: "Jewelry & Accessories", products: 50 },
    { id: 12, name: "Health & Wellness", products: 35 },
    { id: 13, name: "Pet Supplies", products: 25 },
    { id: 14, name: "Musical Instruments", products: 15 },
    { id: 15, name: "Groceries", products: 60 },
  ];

  const CardContent = ({ item }) => {
    return (
      <Card
        elevation={1}
        style={{
          width: "99%",
          margin: 2,
          height: 150,
        }}
      >
        <Card.Content
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Icon source={"folder"} size={50} color={colors.primary} />
          <Text variant="bodyLarge" className="font-bold">
            {item?.name}
          </Text>
          <Text variant="bodyMedium" className="font-bold">
            Products{" "}
            {numbro(item?.products).format({
              mantissa: 0,
              thousandSeparated: true,
            })}
          </Text>
        </Card.Content>
      </Card>
    );
  };
  return (
    <View className="flex-1">
      <Appbar.Header>
        <Appbar.Content
          title="Categories"
          titleStyle={{ fontWeight: "bold" }}
        />
        <Appbar.Action icon={"plus"} />
      </Appbar.Header>
      <FlashList
        ListHeaderComponent={<View className="px-4 py-1"></View>}
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => <CardContent item={item} />}
        numColumns={2}
        contentContainerStyle={{ width: "100%", paddingBottom: 20 }}
      />
    </View>
  );
};

export default Vibes;
