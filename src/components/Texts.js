import { Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../config/Constant";

export function Title({ content }) {
  return (
    <H1
      content={content}
      moreStyles={{
        color: Colors.black,
        fontWeight: "bold",
        margin: 4,
        fontSize: 22,
      }}
    />
  );
}
export function TinyDarkGrayText({ content }) {
  return (
    <H3
      content={content}
      moreStyles={{
        color: Colors.gray700,
        fontWeight: "normal",
        margin: 4,
        fontSize: 12,
      }}
    />
  );
}

export function SmallLightGrayText({ content }) {
  return (
    <H3
      content={content}
      moreStyles={{
        color: Colors.lightGray,
        fontWeight: "normal",
        margin: 4,
        fontSize: 14,
      }}
    />
  );
}

export function UnderLinedText({ content }) {
  return (
    <H3
      content={content}
      moreStyles={{
        color: Colors.gray700,
        fontWeight: "bold",
        margin: 4,
        fontSize: 18,
        textDecorationLine: "underline",
      }}
    />
  );
}
export function RegularBoldWhiteText({ content }) {
  return (
    <H3
      content={content}
      moreStyles={{
        color: Colors.white,
        fontWeight: "bold",
        margin: 4,
        fontSize: 18,
      }}
    />
  );
}

export function RegularCenteredText({ content }) {
  return <H3 content={content} moreStyles={{ textAlign: "center" }} />;
}
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
    color: "green",
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
