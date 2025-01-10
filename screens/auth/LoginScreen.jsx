import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Checkbox, Text, useTheme } from "react-native-paper";
import { Formik } from "formik";
import { InputField, FormSubmitButton } from "../../micro-components";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  //   const { handleLogin } = useLogin();
  // const { loading } = useSelector((state) => state.auth);
  const [loading, setLoading] = React.useState(false);

  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Avatar.Icon
        size={70}
        icon="key"
        style={styles.avatar}
        color="#fff"
        backgroundColor={colors.primary}
      />
      <Text style={styles.title}>Sign in</Text>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          companyName: "",
        }}
        //validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <View style={styles.form}>
            <InputField
              label="Company Name"
              placeholder="Enter name of your company"
              value={values.companyName}
              onChange={(value) => setFieldValue("companyName", value)}
            />
            <InputField
              label="User Name"
              placeholder="Enter your user name"
              value={values.userName}
              onChange={(value) => setFieldValue("userName", value)}
            />
            <InputField
              label="Password"
              isPass={true}
              value={values.password}
              onChange={(value) => setFieldValue("password", value)}
              placeholder="Enter your password"
            />

            <View style={styles.checkboxContainer}>
              <Checkbox.Item
                label="Remember me"
                status="unchecked"
                onPress={() => {}}
              />
            </View>
            <FormSubmitButton
              handleSubmit={handleSubmit}
              loading={loading}
              title="Sign In"
              loadingTitle="Signing In..."
              icon="login"
            />
            <View style={styles.linksContainer}>
              <Button
                mode="text"
                onPress={() => {
                  navigation.navigate("HomeTabs");
                }}
                style={styles.link}
              >
                Forgot password?
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  avatar: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  linksContainer: {
    marginTop: 16,
    alignItems: "flex-start",
  },
  link: {
    paddingHorizontal: 0,
  },
});
