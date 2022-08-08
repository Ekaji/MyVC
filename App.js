import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { postTestDataToFireStore } from "./FirebaseFireStoreDB";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from 'react-native-root-toast'
export default function App() {
  const testFirebase = async () => {
    const data = {
      name: "test",
      age: "test",
    };
    await postTestDataToFireStore(data);
  };

  const testToastPopup = () => {
    // Add a Toast on screen.
    let toast = Toast.show("Request failed to send.", {
      duration: Toast.durations.LONG,
    });

    // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 1000);
  };
  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text> Aug 8 2022</Text>
        <Text> Hmm </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#ff0000",
            width: 100,
            height: 100,
          }}
          onPress={testToastPopup}
        ></TouchableOpacity>
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
