import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import { Colors } from "../config/Constant";
import { H3 } from "../components/Texts";
import { stringIsHere } from "../helpers/helpers";

export function MyVcBaseTextField({
  headerText,
  placeholder,
  onChangeText,
  onDelete,
  value,
  moreStyles,
  autoFocus,
  multiline,
}) {
  return (
    <View style={{ width: "100%", marginBottom: 8 }}>
      {stringIsHere(headerText) && (
        <H3
          content={headerText}
          moreStyles={{
            color: Colors.grey700,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        />
      )}

      <TextInput
        multiline={multiline}
        autoFocus={autoFocus}
        value={value}
        style={{ ...styles.baseTextInput, ...moreStyles }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        paddingStyle={styles.paddingStyle}
        onKeyPress={(e) => {
          e.nativeEvent.key === "Backspace" ? null : null;
        }}
      />
    </View>
  );
}

export function MyVcIconTextField({
  headerText,
  placeholder,
  onChangeText,
  onDelete,
  value,
  moreStyles,
  autoFocus,
  multiline,
  iconImageName,
  onTapIcon,
  iconSize,
}) {
  return (
    <View style={{ width: "100%", marginBottom: 8 }}>
      {stringIsHere(headerText) && (
        <H3
          content={headerText}
          moreStyles={{
            color: Colors.grey700,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        />
      )}

      <View style={{ ...styles.iconView }}>
        <TextInput
          multiline={multiline}
          autoFocus={autoFocus}
          value={value}
          style={{ ...styles.iconTextInput, ...moreStyles }}
          placeholder={placeholder}
          onChangeText={onChangeText}
          paddingStyle={styles.paddingStyle}
          onKeyPress={(e) => {
            e.nativeEvent.key === "Backspace" ? null : null;
          }}
        />
        {iconImageName && (
          <TouchableOpacity
            onPress={onTapIcon}
            style={{
              width: 40,
              height: 40,
              alignment: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={iconImageName}
              style={{ width: iconSize || 24, height: iconSize || 24 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseTextInput: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 10,
    minWidth: 100,
    width: "100%",
  },
  iconTextInput: {
    height: 40,
    padding: 10,
    minWidth: 100,
    flex: 1,
  },
  iconView: {
    borderRadius: 6,
    flexDirection: "row",
    width: "100%",
    borderWidth: 0.5,
    borderColor: Colors.grey500,
  },
  basTextInputView: {
 
    width: "100%",
  },
});
