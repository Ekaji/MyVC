import { View, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../config/Constant";

export default function Header({ children , moreStyles }) {
  return <View style={{...style.container, ...moreStyles}}>{children}</View>;
}

const style = StyleSheet.create({
  container: {
    height: 64,
    borderBottomColor: Colors.verylightGray,
    borderBottomWidth: 1,
    width: "100%",
  },
});
