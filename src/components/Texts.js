import { Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../config/Constant";


export function H3({ content, moreStyles }) {
  return (
    <>
      <Text style={{ ...styles.h3, ...moreStyles }}>{content}</Text>
    </>
  );
}

export function H2({ content, moreStyles }) {
  return (
    <>
      <Text style={{ ...styles.h2, ...moreStyles }}>{content}</Text>
    </>
  );
}
export function H1({ content, moreStyles }) {
  return (
    <>
      <Text style={{ ...styles.h1, ...moreStyles }}>{content}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color:"green",
    fontWeight: "bold",

  },
  h1: {
    fontSize: 22,
    color: Colors.black,
    fontWeight: "bold",
    lineHeight: 30,
    
    
  },
  h2: {
    fontSize: 30,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 20,
  },
  h4: {},
});
