import { Image, StyleSheet, View } from "react-native";
import { postTestDataToFireStore } from "./FirebaseFireStoreDB";
import { RootSiblingParent } from "react-native-root-siblings";

import MyStatusBar from "./src/components/StatusBar";

import RootNavigator from "./src/Navigation/RootNavigator";
import { store } from "./src/store/index";
import { Provider } from "react-redux";

import { useState, useEffect } from "react";

import removeBackgroundFromImage from "./RemoveBackground";
const testImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/vc-development-44703.appspot.com/o/top.jpg?alt=media&token=77dba186-29c7-451e-8b90-0e0d24e92e01";
export default function App() {
  const testFirebase = async () => {
    const data = {
      name: "test",
      age: "test",
    };
    await postTestDataToFireStore(data);
  };

  const testimageBackgroundRemoval = (imageurl) => {
    removeBackgroundFromImage(imageurl);
  };

  useEffect(() => {
    // testimageBackgroundRemoval(testImageUrl);
  }, []);

  const [dropDownText, setDropDownText] = useState("nothing selected");

  return (
    <Provider store={store}>
      <RootSiblingParent>
        <MyStatusBar barStyle="light-content" backgroundColor="black" />
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </RootSiblingParent>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
});
