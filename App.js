import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { postTestDataToFireStore } from "./FirebaseFireStoreDB";
import { RootSiblingParent } from "react-native-root-siblings";

import MyStatusBar from "./src/components/StatusBar";

import RootNavigator from "./src/Navigation/RootNavigator";
import { store } from "./src/store/index";
import { Provider } from "react-redux";
export default function App() {
  const testFirebase = async () => {
    const data = {
      name: "test",
      age: "test",
    };
    await postTestDataToFireStore(data);
  };

  return (
    <Provider store={store}>
      <RootSiblingParent>
        <MyStatusBar barStyle="light-content" backgroundColor="black" />
        <View style={styles.container}>
          <RootNavigator />
          {/* <SignUp/> */}
        </View>
      </RootSiblingParent>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
});
