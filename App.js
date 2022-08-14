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
          {
            // Buttons
          }
          <UnderLinedButton
            text={"UnderLined Button"}
            onPress={() => {
              bottomPopUpMessage("Touching the underlined botton");
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "gray",
            }}
          >
            <PlusButton
              onPress={() => {
                bottomPopUpMessage("Touching the plus botton");
              }}
            />
            <CircleBorderCameraButton
              onPress={() => {
                bottomPopUpMessage("Touching the camera thin botton");
              }}
              text={"Camera"}
            />
            <CircleCameraButton
              onPress={() => {
                bottomPopUpMessage("Touching the camera bold botton");
              }}
              selected={false}
            />
            <CircleGalleryButton
              onPress={() => {
                bottomPopUpMessage("Touching the gallery botton");
              }}
              selected={false}
            />
            <CircleSearchButton
              onPress={() => {
                bottomPopUpMessage("Touching the search botton");
              }}
              selected={false}
            />
            <CircleUPCButton
              onPress={() => {
                bottomPopUpMessage("Touching the UPC botton");
              }}
            />
          </View>
          <CurvedButton
            text={"Google"}
            onPress={() => {
              bottomPopUpMessage("Touching the curved botton");
            }}
            imageUrl={ImageSet.google_icon}
          />
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
