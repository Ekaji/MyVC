import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import { CurvedButton } from "../../components/Buttons";
import { H1, H3, SmallLightGrayText } from "../../components/Texts";
import { Colors, ImageSet } from "../../config/Constant";
import { bottomPopUpMessage } from "../../helpers/helpers";

export default function Home({ navigation }) {
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToMain = () => {};

  useEffect(() => {})
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <H1
          content={"Welcome!"}
          moreStyles={{
            marginTop: 80,
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
      </View>
      <View style={styles.bottomViewWithbuttons}>
        <SmallLightGrayText content={"Login/Sign-up easily with"} />

        <CurvedButton
          text={"Google"}
          onPress={() => {
            bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
          }}
          imageUrl={ImageSet.google_icon}
          moreStyles={styles.button}
        />

        <CurvedButton
          text={"iCloud"}
          onPress={() => {
            bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
          }}
          imageUrl={ImageSet.apple_icon}
          moreStyles={styles.button}
        />
        <CurvedButton
          text={"Phone Number"}
          onPress={() => {
            goToSignUp();
          }}
          imageUrl={ImageSet.phone_icon}
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
  bottomViewWithbuttons: {
    alignItems: "center",
    flex: 0.7,
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 60,
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    flex: 0.3,
  },
  button: {
    marginVertical: 8,
    width: "90%",
    height: 64,
    borderRadius: 32,
  },
});
