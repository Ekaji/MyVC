import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ImageWrapper from "./ImageWrapper";
import {
  CLOTH_COMPONENET_WIDTH,
  CLOTH_COMPONENET_HEIGHT,
  Colors,
  ImageSet,
} from "../config/Constant";
import Checkbox from "expo-checkbox";
export default function Cloth({
  imageUrl,
  onPressEdit,
  checkbox,
  moreStyles,
  onClickCheckBox,
}) {
  return (
    <View
      style={{
        width: CLOTH_COMPONENET_WIDTH,
        height: CLOTH_COMPONENET_HEIGHT,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        ...moreStyles,
      }}
    >
      <Image
        source={imageUrl || ImageSet.apple_icon}
        style={{
          flex: 1,

          width: CLOTH_COMPONENET_WIDTH,
          height: CLOTH_COMPONENET_HEIGHT,
          borderRadius: 25,
          position: "absolute",
        }}
      />

      <View style={styles.bottomBar}>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {checkbox ? (
            <CheckboxButton onPress={onClickCheckBox} />
          ) : (
            <ThreeDotsButton onPress={onPressEdit} />
          )}
        </View>
      </View>
    </View>
  );
}

export function ThreeDotsButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginRight: 10,
      }}
    >
      <Image
        source={ImageSet.threedots_black}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
}

export function CheckboxButton({ onPress }) {
  const [isChecked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginRight: 10,
        marginTop: 3,
      }}
    >
      <Checkbox
        style={styles.checkBox}
        value={isChecked}
        onValueChange={setChecked}
        color={Colors.black}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    zIndex: 10,
    height: 30,
    backgroundColor: "rgba(243, 243, 243, 0.53)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 30,
  },
  checkBox: {
    width: 20,
    height: 20,
  },
});
