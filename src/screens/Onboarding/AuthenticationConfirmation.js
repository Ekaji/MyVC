import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import {
  BackButton,
  CurvedButton,
  UnderLinedButton,
} from "../../components/Buttons";
import {
  MyVcBaseTextField,
  MyVcIconTextField,
} from "../../components/TextFields";
import { H1, H3, SmallLightGrayText } from "../../components/Texts";
import { Colors, ImageSet, SCREEN_WIDTH } from "../../config/Constant";
import { bottomPopUpMessage } from "../../helpers/helpers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../../components/Header";

export default function AuthenticationConfirmation({ navigation, children }) {
  const goToPhoneNumberConfirmation = () => {
    navigation.navigate("SignUp");
  };

  const goToMain = () => {};

  return (
    <View style={styles.container}>
      <Header moreStyles={{ justifyContent: "center" }}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
          moreStyles={{
            alignSelf: "flex-start",
            marginTop: 8,
            marginLeft: 8,
            width: 16,
            height: 16,
            justifyContent: "center",
          }}
        />
      </Header>

      <View style={styles.topContainer}>
        <H1
          content={"Confirm Phone Number"}
          moreStyles={{
            marginTop: 32,
          }}
        />
        <H3
          content={
            "Kindly confirm your phone number with the 6 digit code sent to your number [080****556]"
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

      <MyVcBaseTextField
        headerText={"Confirmation Pin"}
        placeholder={"Enter Confirmation Pin"}
        moreViewStyles={{
          width: SCREEN_WIDTH - 32,
        }}
      />
      <UnderLinedButton
        text={"Request New Code"}
        onPress={() => {
          bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
        }}
        moreStyles={{ alignSelf: "flex-start", marginLeft: 16 }}
        textStyle={{
          fontSize: 14,
        }}
      />
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
          width: "100%",
        }}
      >
        <CurvedButton
          text={"Submit"}
          onPress={() => {
            bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
          }}
          moreStyles={styles.button}
        />
      </View>
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
