import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { postTestDataToFireStore } from "./FirebaseFireStoreDB";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import {
  MyVcBaseTextField,
  MyVcIconTextField,
} from "./src/components/TextFields";
import {
  H1,
  H3,
  RegularBoldWhiteText,
  RegularCenteredText,
  Title,
  UnderLinedText,
  SmallLightGrayText,
  TinyDarkGrayText,
} from "./src/components/Texts";
import { ImageSet } from "./src/config/Constant";
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

        <View style={{ marginHorizontal: 16, flex: 1, marginTop: 80 }}>
          <H1 content={`Welcome!`} />
          <H3
            content={
              "Automate your every day warddrobe and always be ready for any event!"
            }
          />
          <MyVcBaseTextField
            headerText={"Phone Number"}
            placeholder={"Enter Phone Number"}
          />
          <MyVcIconTextField
            iconImageName={ImageSet.eyeOpen}
            headerText={"Password"}
            placeholder={"Enter Password"}
            onTapIcon={() => console.log("tapping icon")}
          />
          <Title content={"Forgot Password?"} />
          <RegularCenteredText
            content={
              "Automate your every day warddrobe and always be ready for any event!"
            }
          />
          <View style={{ backgroundColor: "black" }}>
            <RegularBoldWhiteText content={"Sign Up"} />
          </View>
          <UnderLinedText content={"Sign In"} />
          <SmallLightGrayText content={"By signing up, you agree to our"} />
          <TinyDarkGrayText content={"Terms of Service"} />
        </View>
      </View>
    </RootSiblingParent>
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
