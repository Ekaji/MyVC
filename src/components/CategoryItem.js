import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "../config/Constant";

export default function CategoryItem({ text, onPress }) {
  const backgroundColor = selected ? Colors.black : Colors.categorylightGray;
  const textColor = selected ? Colors.white : Colors.black;
  const [selected, setSelected] = useState(false);

  const buttonPressed = () => {
    setSelected(!selected);
    onPress();
  };
  return (
    <TouchableOpacity
      onPress={() => buttonPressed()}
      style={{
        backgroundColor: selected ? Colors.black : Colors.categorylightGray,
        height: 40,
        minWidth: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        padding: 10,
        marginHorizontal: 8,
        marginBottom: 4,
      }}
    >
      <Text
        style={{
          color: selected ? Colors.white : Colors.black,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
