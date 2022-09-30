import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { postTestDataToFireStore } from "./FirebaseFireStoreDB";
import { RootSiblingParent } from "react-native-root-siblings";

import MyStatusBar from "./src/components/StatusBar";

import RootNavigator from "./src/Navigation/RootNavigator";
import { store } from "./src/store/index";
import { Provider } from "react-redux";
import Outfit from "./src/screens/Main/GenerateOutfit/Outfit";
import ModalWrapper from "./src/components/ModalWrapper";
import { useState } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { ImageSet } from "./src/config/Constant";
import { getListOfCountriesNames } from "./src/helpers/helpers";
export default function App() {


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
