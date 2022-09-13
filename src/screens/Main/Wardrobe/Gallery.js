import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import SingleTab from "../../../components/SingleTab";
import React, { useEffect } from "react";
import { Colors, ImageSet } from "../../../config/Constant";
import { FloatingAction } from "react-native-floating-action";
import Header from "../../../components/Header";
import {
  BackButton,
  DropDownhButton,
  FilterButton,
  SearchButton,
} from "../../../components/Buttons";
import { H1, H3, SmallLightGrayText } from "../../../components/Texts";
import { bottomPopUpMessage } from "../../../helpers/helpers";
import * as ImagePicker from "expo-image-picker";

export default function Gallery({ navigation }) {
  const [image, setImage] = React.useState(null);

  const selectFinalImage = async () => {
    navigation.navigate("AddClothes", { image: image });
  };
  const pickImage = async () => {
    if (Platform.OS === "android") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    pickImage();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        moreStyles={{
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
          moreStyles={{
            marginTop: 8,
            marginLeft: 8,
            width: 16,
            height: 16,
            marginBottom: 8,
          }}
        />

        <H3
          content={"Back"}
          moreStyles={{
            color: Colors.gray700,
            fontWeight: "bold",
            marginBottom: 8,
            marginLeft: 32,
            marginTop: 8,
          }}
        />
      </Header>

      <View style={styles.imageView}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{
              // flex: 1,
              // width: "100%",
              // height: "100%",
              ...StyleSheet.absoluteFillObject,
            }}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>No image selected</Text>
            <TouchableOpacity onPress={pickImage}>
              <Text>Click here to pick image</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {image && (
        <View style={styles.rowButttons}>
          <TouchableOpacity style={styles.button} onPress={selectFinalImage}>
            <Image source={ImageSet.checkmark_black} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setImage(null);
            }}
          >
            <Image source={ImageSet.cancel_black} style={styles.image} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 8,
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",

    alignSelf: "center",
  },
  imageView: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  rowButttons: {
    flexDirection: "row",
    height: 80,
    backgroundColor: Colors.white,
    flex: 0.2,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 36,
    height: 36,
  },
});
