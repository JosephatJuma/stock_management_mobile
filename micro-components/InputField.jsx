import { TextInput, HelperText } from "react-native-paper";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Keyboard } from "react-native";
const InputField = (props) => {
  const [showPass, setShowPass] = useState(true);
  const { theme } = useSelector((state) => state.theme.theme);

  const renderError = (error) => {
    return (
      <>
        {error && (
          <HelperText variant="labelSmall" type="error">
            {error}
          </HelperText>
        )}
      </>
    );
  };

  return (
    <>
      <TextInput
        className="m-4 bg-gray-100 font-bold text-gray-500"
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        showSoftInputOnFocus={props.isDate ? false : true}
        secureTextEntry={props.isPass && showPass}
        multiline={props.multiline ? true : false}
        maxLength={props.maxLength}
        disabled={props.disabled}
        accessibilityLabel={props.label}
        numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
        mode="flat"
        right={
          props.isPass ? (
            <TextInput.Icon
              onPress={() => {
                setShowPass(!showPass);
                Keyboard.dismiss();
              }}
              icon={showPass ? "eye" : "eye-off"}
              accessibilityLabel={showPass ? "show password" : "hide password"}
              size={30}
            />
          ) : props.isDate ? (
            <TextInput.Icon
              icon="calendar"
              onPress={props.getDate}
              accessibilityLabel="pick date"
              size={30}
            />
          ) : props.multiline ? (
            <TextInput.Affix
              text={`${props?.value?.length}/${props?.maxLength}`}
              textStyle={{ color: "gray", fontSize: 12 }}
            />
          ) : null
        }
        left={
          props.rightIcon ? (
            <TextInput.Icon
              icon={props.rightIcon}
              accessibilityLabel={props.rightIcon}
              onPress={props.action ? props.action : () => {}}
              size={30}
            />
          ) : null
        }
        style={{
          width: "100%",
          height: !props.multiline && 60,
          borderRadius: 8,
          padding: props.multiline && 5,
          marginTop: 12,
          minHeight: 60,
          backgroundColor:
            theme === "dark"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(252, 240, 240, 0.8)",
          fontWeight: "600",
          fontSize: 18,
        }}
        focusable={false}
        autoFocus={props.autoFocus}
        editable={props.editable}
        placeholderTextColor={"gray"}
        activeOutlineColor="#004AAD"
        theme={{
          colors: { primary: theme === "dark" ? "#fff" : "#004AAD" },
          borderRadius: 8,
        }}
        keyboardType={props.keyboardType}
        outlineStyle={{ borderRadius: 8, borderColor: "#e5e7eb" }}
      />
      {renderError(props.error)}
    </>
  );
};

export default InputField;
