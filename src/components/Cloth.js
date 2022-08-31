import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import ImageWrapper from "./ImageWrapper";
import {
  CLOTH_COMPONENET_WIDTH,
  CLOTH_COMPONENET_HEIGHT,
  Colors,
  ImageSet,
} from "../config/Constant";

export default function Cloth({ imageUrl, onPressEdit, checkbox }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        width: CLOTH_COMPONENET_WIDTH,
        height: CLOTH_COMPONENET_HEIGHT,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={imageUrl || ImageSet.apple_icon}
        style={{
          flex: 1,
          backgroundColor: "red",
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
          <TouchableOpacity onPress={onPressEdit}>
            <Image
              source={ImageSet.threedots_black}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    zIndex: 10,
    height: 20,
    backgroundColor: "rgba(243, 243, 243, 0.53)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
