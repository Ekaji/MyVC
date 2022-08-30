import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function ImageWrapper({
  uri,
  size,
  width,
  height,
  buttonEnabled,
}) {
  return (
    <TouchableOpacity disabled={buttonEnabled}>
      <Image
        source={{ uri: uri }}
        style={{
          width: width || size || 24,
          height: height || size || 24,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
