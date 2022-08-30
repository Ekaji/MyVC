import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export function CheckBox({ circle }) {
  return (
    <View>
      {circle ? (
        <>
          <Text> test circle </Text>
        </>
      ) : (
        <>
          <Text> test square </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
