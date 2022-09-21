import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors, ImageSet } from "..//config//Constant";
import React from "react";

export default function SingleTab({
  text,
  focused,
  imageUrl_focused,
  imageUrl_unfocused,
}) {
  const imageUrl = focused ? imageUrl_focused : imageUrl_unfocused;
  const backgroundColor = focused ? Colors.black : Colors.white;
  const justifyContent = focused ? "space-between" : "flex-end";
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, justifyContent: justifyContent },
      ]}
    >
      <Image source={imageUrl} style={styles.image} />
      {focused && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
});
