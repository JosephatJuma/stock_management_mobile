import { View, Text } from "react-native";
import React from "react";
import { Button, useTheme } from "react-native-paper";
import useAppTheme from "../hooks/useAppTheme";

export default function FormSubmitButton({
  title,
  handleSubmit,
  disabled,
  loading,
  icon,
}) {
  const { colors } = useTheme();
  return (
    <Button
      className="w-100 mt-4 rounded-3x1"
      onPress={handleSubmit}
      accessibilityLabel={title}
      disabled={disabled}
      loading={loading}
      mode="contained"
      contentStyle={{
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
      }}
      labelStyle={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}
      style={{ marginTop: 15, borderRadius: 10 }}
      icon={icon}
    >
      {title}
    </Button>
  );
}
