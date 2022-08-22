import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { CurvedButton } from "../../components/Buttons";
import {
  MyVcBaseTextField,
  MyVcIconTextField,
} from "../../components/TextFields";
import { H1, H3, SmallLightGrayText } from "../../components/Texts";
import { Colors, ImageSet, SCREEN_WIDTH } from "../../config/Constant";
import { bottomPopUpMessage } from "../../helpers/helpers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUp({ navigation }) {
  const goToPhoneNumberConfirmation = () => {
    navigation.navigate("AuthenticationConfirmation");
  };

  const goToMain = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <H1
          content={"Welcome!"}
          moreStyles={{
            marginTop: 32,
          }}
        />
        <H3
          content={
            "Automate your every day warddrobe and always be ready for any event!"
          }
          moreStyles={{
            marginTop: 16,
            textAlign: "center",
          }}
        />
        <SmallLightGrayText
          content={"Signing-up with Phone number"}
          moreStyles={{
            marginTop: 16,
          }}
        />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          width: "100%",
        }}
      >
        <MyVcBaseTextField
          headerText={"First Name"}
          placeholder={"Enter First Name"}
          moreViewStyles={{
            width: SCREEN_WIDTH - 32,
          }}
        />
        <MyVcBaseTextField
          headerText={"Last Name"}
          placeholder={"Enter Last Name"}
          moreViewStyles={{
            width: SCREEN_WIDTH - 32,
          }}
        />
        <MyVcBaseTextField
          headerText={"Email"}
          placeholder={"Enter Email"}
          moreViewStyles={{
            width: SCREEN_WIDTH - 32,
          }}
        />
        <MyVcBaseTextField
          headerText={"Phone Number"}
          placeholder={"Enter Phone Number"}
          moreViewStyles={{
            width: SCREEN_WIDTH - 32,
          }}
        />
        <MyVcIconTextField
          iconImageName={ImageSet.dropDown}
          headerText={"Your Country"}
          placeholder={"Click to select country"}
          onTapIcon={() => console.log("tapping icon")}
          moreViewStyles={{
            width: SCREEN_WIDTH - 32,
          }}
        />
        <MyVcIconTextField
          iconImageName={ImageSet.eyeClose}
          headerText={"Password"}
          placeholder={"Enter Password"}
          onTapIcon={() => console.log("tapping icon")}
          moreViewStyles={{
            width: SCREEN_WIDTH - 32,
          }}
          secureTextEntry={true}
        />
        <MyVcIconTextField
          iconImageName={ImageSet.eyeClose}
          headerText={"Confirm Password"}
          placeholder={"Enter Password"}
          onTapIcon={() => console.log("tapping icon")}
          moreViewStyles={{
            width: "90%",
          }}
          secureTextEntry={true}
        />
      </KeyboardAwareScrollView>
      <CurvedButton
        text={"Next"}
        onPress={() => {
            goToPhoneNumberConfirmation();
        }}
        moreStyles={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  TextFieldsContainer: {
    alignItems: "center",

    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 60,
    backgroundColor: Colors.black,
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  button: {
    marginVertical: 8,
    width: "90%",
    height: 64,
    borderRadius: 32,
  },
});
