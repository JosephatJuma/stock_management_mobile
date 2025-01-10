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
} from "react-native-paper";
import { useSelector } from "react-redux";
import { Header } from "../../micro-components";

const Profile = () => {
  const user = {
    name: "Josephat Juma",
    email: { emailAddress: "jumajosephat61@gmail.com" },
    userName: "JuJosephat",
  };
  const { colors } = useTheme();

  return (
    <View className="flex-1">
      <Header title={"Profile"} />
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
