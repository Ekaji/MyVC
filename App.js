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
import {
  CircleBorderCameraButton,
  CircleCameraButton,
  CircleGalleryButton,
  CircleSearchButton,
  CircleUPCButton,
  CurvedButton,
  ParentCircleButton,
  PlusButton,
  UnderLinedButton,
} from "./src/components/Buttons";
import { bottomPopUpMessage } from "./src/helpers/helpers";
import MyStatusBar from "./src/components/StatusBar";
import TryComponents from "./TRY_COMPONENTS";
import Home from "./src/screens/Onboarding/Home";
import RootNavigator from "./src/Navigation/RootNavigator";
import SignUp from "./src/screens/Onboarding/SignUp";
export default function App() {
  const testFirebase = async () => {
    const data = {
      name: "test",
      age: "test",
    };
    await postTestDataToFireStore(data);
  };

  return (
    <RootSiblingParent>
      <MyStatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
       
        <RootNavigator />
        {/* <SignUp/> */}
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
