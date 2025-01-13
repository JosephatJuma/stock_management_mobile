import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
  IconButton,
  useTheme,
  List,
  RadioButton,
} from "react-native-paper";
import { useSelector } from "react-redux";
import { Header } from "../../micro-components";
import useAppTheme from "../../hooks/useAppTheme";

const Profile = () => {
  const user: any = {
    name: "Josephat Juma",
    email: { emailAddress: "jumajosephat61@gmail.com" },
    userName: "JuJosephat",
  };
  const { colors } = useTheme();
  const { handleChangeTheme } = useAppTheme();
  const { theme } = useSelector((state: any) => state.theme);

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

  return (
    <View className="flex-1">
      <Header title={"Settings/Profile"} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.profileSection}>
          <Card style={[styles.card, { backgroundColor: colors.background }]}>
            <Card.Content>
              <View>
                <Avatar.Image
                  source={{
                    uri: "https://via.placeholder.com/200x200",
                  }}
                  size={120}
                  style={styles.avatar}
                />
                <IconButton
                  icon="camera"
                  iconColor="#fff"
                  size={40}
                  onPress={() => {}}
                  style={styles.cameraIcon}
                />
              </View>
              <Text style={styles.name}>{user?.name || "User Name"}</Text>
              <Text style={styles.role}>Full Stack Developer</Text>
              <Button mode="outlined" style={styles.button} onPress={() => {}}>
                Follow
              </Button>
              <Button mode="contained" style={styles.button} onPress={() => {}}>
                Message
              </Button>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.detailsSection}>
          <Card style={[styles.card, { backgroundColor: colors.background }]}>
            <Card.Content>
              <Text style={styles.sectionTitle}>About Me</Text>
              <Text style={styles.bodyText}>
                {user?.about || "Add about you"}
              </Text>
              <TextInput
                label="Email"
                value={user?.email?.emailAddress || ""}
                mode="flat"
                style={styles.input}
                disabled
              />
              <TextInput
                label="Username"
                value={`@${user?.userName}` || ""}
                mode="flat"
                style={styles.input}
                disabled
              />
            </Card.Content>
          </Card>

          <Card
            style={[
              styles.card,
              styles.companyCard,
              { backgroundColor: colors.background },
            ]}
          >
            <Card.Content>
              <Text style={styles.sectionTitle}>Company</Text>
              <Text style={styles.companyName}>
                {user?.company?.name || "Add company details"}
              </Text>
              <Button mode="outlined" style={styles.button} onPress={() => {}}>
                Edit
              </Button>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.detailsSection}>
          <Card
            style={[
              styles.card,
              styles.companyCard,
              { backgroundColor: colors.background },
            ]}
          >
            <Card.Content>
              <Text style={styles.sectionTitle}>Theme</Text>
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
                      value={theme}
                      status={theme === item.value ? "checked" : "unchecked"}
                      onPress={() => handleChangeTheme(item.value)}
                    />
                  )}
                />
              ))}
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: 25,
  },
  profileSection: {},
  card: {
    padding: 16,
    borderRadius: 0,
  },
  avatar: {
    alignSelf: "center",
    marginBottom: 16,
  },
  cameraIcon: {
    alignSelf: "center",
    position: "absolute",
    right: "30%",
    bottom: "10%",
    backgroundColor: "gray",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  role: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    marginVertical: 8,
  },
  detailsSection: {
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  companyCard: {
    marginTop: 2,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
});

export default Profile;
// 30a286c6d79d
