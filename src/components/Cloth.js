import { View, Text } from "react-native";
import React from "react";
import ImageWrapper from "./ImageWrapper";
import {
  CLOTH_COMPONENET_WIDTH,
  CLOTH_COMPONENET_HEIGHT,
} from "../config/Constant";

export default function Cloth({ imageUrl }) {
  return (
    <View>
      <ImageWrapper
        uri={imageUrl}
        width={CLOTH_COMPONENET_WIDTH}
        height={CLOTH_COMPONENET_HEIGHT}
      />

      <View style={styles.bottomBar} ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    zIndex: 10,
  },
});
