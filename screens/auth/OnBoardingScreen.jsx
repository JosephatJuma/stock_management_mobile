import {
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FormSubmitButton } from "../../micro-components";
import { Divider, Text, useTheme, Badge } from "react-native-paper";
import { TabView, SceneMap } from "react-native-tab-view";
import image1 from "../../assets/onboarding/onb1.png";
import image2 from "../../assets/onboarding/onb2.png";
import image3 from "../../assets/onboarding/onb3.png";
const OnBoardingScreen = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const imageMap = {
    "image1.png": image1,
    "image2.png": image2,
    "image3.png": image3,
    // Add more mappings as needed
  };

  const steps = [
    {
      title:
        "Locate your nearest bus or station or root to travel to your destination",
      image: "image1.png",
    },
    {
      title:
        "Book your favavorite bus on your next journey or root to travel seamlessly with ease and comfort",
      image: "image2.png",
    },
    {
      title:
        "Travel Safely and Relax. Enjoy your journey with us. Rate Drivers and Book Tickets",
      image: "image3.png",
    },
  ];

  const renderStep = (step) => {
    const imageSource = imageMap[step?.image] || null;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={imageSource} style={{ width: 400, height: 400 }} />
        <Text
          variant="bodyLarge"
          className="text-center"
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            textAlignVertical: "center",
            marginHorizontal: 20,
          }}
        >
          {step?.title}
        </Text>
      </View>
    );
  };
  const renderScene = SceneMap(
    steps.reduce(
      (acc, step, idx) => ({
        ...acc,
        [idx]: () => renderStep(step),
      }),
      {}
    )
  );

  const routes = steps.map((_, idx) => ({
    key: idx.toString(),
    title: `Image ${idx}`,
  }));

  const layout = useWindowDimensions();

  const renderTabBar = () => {
    return <View style={{ display: "none" }}></View>;
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Badge
        style={{
          backgroundColor: colors.primary,
          color: "#fff",
          position: "absolute",
          right: 20,
          top: 50,
          marginVertical: 10,
        }}
        size={30}
      >
        {index + 1}
      </Badge>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={{ width: layout.width }}
      />

      <View className="w-80 p-2">
        <View
          className="flex-row justify-between w-20 items-center"
          style={{ alignSelf: "center" }}
        >
          {steps.map((step, idx) => (
            <TouchableOpacity
              key={idx}
              style={{
                height: 20,
                width: 20,
                borderColor: colors.primary,
                borderWidth: 2,
                backgroundColor: index === idx ? colors.primary : "transparent",

                borderRadius: 10,
              }}
              onPress={() => setIndex(idx)}
            />
          ))}
        </View>
        <Divider style={{ marginVertical: 20, height: 1.2 }} />
        <FormSubmitButton
          title="Get Started"
          handleSubmit={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;
