import { ScrollView, View } from "react-native";
import React from "react";
import { Appbar, List, RadioButton, useTheme } from "react-native-paper";
import { Header } from "../../micro-components";
import { useSelector } from "react-redux";
import useAppTheme from "../../hooks/useAppTheme";
const Settings = () => {
  const { colors } = useTheme();
  const { theme } = useSelector((state) => state.theme);
  const { handleChangeTheme } = useAppTheme();
  const themeOptions = [
    {
      label: "Light",
      description: "Changing theme to light",
      icon: "brightness-7",
      value: "light",
      action: () => {},
    },
    {
      label: "Dark",
      description: "Changing theme to dark",
      icon: "brightness-2",
      value: "dark",
      action: () => {},
    },
  ];
  const securityOptions = [
    {
      label: "Change Password",
      description: "Change your password",
      icon: "lock",
      action: () => {},
    },
    {
      label: "Change Email",
      icon: "email",
      description: "Change your email address",
      action: () => {},
    },
    {
      label: "Push Notifications",
      description: "Turn on push notifications",
      icon: "bell",
      action: () => {},
    },
  ];
  const danderZoneOptions = [
    {
      label: "Delete Account",
      icon: "account-off",
      description: "Permanently delete your account",
      action: () => {},
    },
    {
      label: "Temporary Delete Account",
      icon: "account-off",
      description: "Permanently delete your account",
      action: () => {},
    },
  ];
  return (
    <ScrollView
      className="flex-1 "
      contentContainerStyle={{ backgroundColor: colors.background }}
    >
      <Header title={"Settings"}>
        <Appbar.Action icon="cog" />
      </Header>
      <List.Section title="Theme">
        {themeOptions.map((item, index) => (
          <List.Item
            key={index}
            title={item.label}
            description={item.description}
            //onPress={item.action}
            left={(props) => <List.Icon {...props} icon={item.icon} />}
            right={(props) => (
              <RadioButton
                {...props}
                status={theme === item.value ? "checked" : "unchecked"}
                onPress={() => handleChangeTheme(item.value)}
              />
            )}
          />
        ))}
      </List.Section>
      <List.Section title="Security">
        {securityOptions.map((item, index) => (
          <List.Item
            key={index}
            title={item.label}
            description={item.description}
            onPress={item.action}
            left={(props) => <List.Icon {...props} icon={item.icon} />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        ))}
      </List.Section>

      <List.Section title="Dander Zone">
        {danderZoneOptions.map((item, index) => (
          <List.Item
            key={index}
            title={item.label}
            description={item.description}
            onPress={item.action}
            left={(props) => <List.Icon {...props} icon={item.icon} />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        ))}
      </List.Section>
    </ScrollView>
  );
};

export default Settings;
