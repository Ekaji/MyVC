import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { ImageSet } from "../config/Constant";

export default function ImageWrapper({
  uri,
  size,
  width,
  height,
  buttonEnabled,
}) {
  const activeOpacity = buttonEnabled ? 1 : 0.3;
  return (
    <TouchableOpacity
      disabled={false}
      activeOpacity={activeOpacity}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        
      }}
    >
      <Image
        source={ImageSet.apple_icon}
        style={{
          // width: width || size || 24,
          // height: height || size || 24,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
