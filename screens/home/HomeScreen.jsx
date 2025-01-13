import { View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Appbar, Card, Text, useTheme, Icon } from "react-native-paper";
import numbro from "numbro";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { FlashList } from "@shopify/flash-list";
import { LineChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  const cardItems = [
    { title: "Total Sales", value: 100, icon: "point-of-sale" },
    { title: "Products", value: 1000, icon: "view-dashboard" },
    { title: "Gross Sales", value: 200000, icon: "white-balance-iridescent" },
    { title: "Current Stock", value: 1350000, icon: "bookmark-check" },
    {
      title: "Today's Profit",
      value: 12000,
      icon: "white-balance-incandescent",
    },
    { title: "Sales Today", value: 5600, icon: "scale-unbalanced" },
  ];

  const CardContent = ({ item }) => {
    return (
      <Card
        elevation={1}
        style={{
          width: "94%",
          margin: 10,
        }}
      >
        <Card.Content
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Icon source={item?.icon} size={50} color={colors.primary} />
          <Text variant="bodyLarge" className="font-bold">
            {item?.title}
          </Text>
          <Text variant="bodyMedium" className="font-bold">
            {numbro(item?.value).format({
              mantissa: 2,
              thousandSeparated: true,
            })}
          </Text>
        </Card.Content>
      </Card>
    );
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          20000, 30000, 25000, 28000, 35000, 39000, 35000, 31000, 34000, 23000,
          25000, 28000,
        ],
        color: (opacity = 1) => `${colors.tertiary}, ${opacity})`, // optional
        strokeWidth: 5, // optional
      },
    ],
    legend: ["Monthly Income"], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `${colors.secondary}, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data1 = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 5276120,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <View className="flex-1">
      <Appbar.Header>
        <Appbar.Content
          title="Stock Manager"
          titleStyle={{ fontWeight: "bold" }}
        />

        <Appbar.Action icon="sale" onPress={() => console.log("Pressed")} />

        <Appbar.Action icon="plus" onPress={() => console.log("Pressed")} />
      </Appbar.Header>
      <ScrollView>
        <FlashList
          ListHeaderComponent={
            <View className="px-4 py-1">
              <Text variant="bodyLarge" className="font-bold">
                {greeting}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={cardItems}
          renderItem={({ item }) => <CardContent item={item} />}
          numColumns={2}
          //contentContainerStyle={{ width: "100%", paddingBottom: 20 }}
          ListFooterComponent={
            <View className="flex-1">
              <LineChart
                data={data}
                width={screenWidth}
                height={200}
                verticalLabelRotation={10}
                chartConfig={chartConfig}
                bezier
              />
            </View>
          }
        />
        {/* <View style={{ margin: 20, width: "100%", height: "50%" }}>
                <PieChart
                  data={data1}
                  width={screenWidth}
                  height={200}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  absolute={false}
                  avoidFalseZero={false}
                  backgroundColor={"transparent"}
                  paddingLeft={"0"}
                  center={[20, 50]}
                  style={{
                    margin: 10,
                  }}
                />
              </View> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
