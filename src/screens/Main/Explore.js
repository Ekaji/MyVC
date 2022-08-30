import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SingleTab from "../../components/SingleTab";
import React from "react";
import { Colors, ImageSet } from "../../config/Constant";
import { FloatingAction } from "react-native-floating-action";
import Header from "../../components/Header";
import {
  BackButton,
  DropDownhButton,
  FilterButton,
  SearchButton,
} from "../../components/Buttons";
import { H1, H3, SmallLightGrayText } from "../../components/Texts";
import { bottomPopUpMessage } from "../../helpers/helpers";

const actions = [
  {
    text: "Scan Upc",
    icon: ImageSet.upc_black,
    name: "Scan UPC",
    position: 1,
    color: Colors.black,
    textBackground: null,
    textColor: Colors.black,
    textStyle: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
  {
    text: "Search UPC",
    icon: ImageSet.search_black,
    name: "Search UPC",
    position: 2,
    color: Colors.black,
    textBackground: null,
    textColor: Colors.black,
    textStyle: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
  {
    text: "Snap Photo",
    icon: ImageSet.camera_bold,
    name: "Snap Photo",
    position: 3,
    color: Colors.black,
    textBackground: null,
    textColor: Colors.black,
    textStyle: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
  {
    text: "Gallery",
    icon: ImageSet.gallery_white,
    name: "Gallery",
    position: 4,
    color: Colors.black,
    textBackground: null,
    textColor: Colors.black,
    textStyle: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
];

const Items = ["", "", "", ""];

export default function Explore() {
  return (
    <View style={styles.container}>
      <Header
        moreStyles={{
          justifyContent: "space-between",
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <H3
          content={"Your Profile"}
          moreStyles={{
            color: Colors.gray700,
            fontWeight: "bold",
            marginBottom: 8,
            marginLeft: 32,
            marginTop: 8,
          }}
        />
        <View style={styles.headerRight}>
          <SearchButton
            onPress={() => {
              bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
            }}
            moreStyles={{
              marginTop: 8,
              marginLeft: 17,
              width: 16,
              height: 16,
            }}
          />

          <FilterButton
            onPress={() => {
              bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
            }}
            moreStyles={{
              marginTop: 8,
              marginLeft: 16,
              marginRight: 16,
              width: 16,
              height: 16,
            }}
          />
        </View>
      </Header>

      <View style={styles.topContainer}>
        <H1
          content={"Start your virtual wardrobe"}
          moreStyles={{
            marginTop: 32,
          }}
        />

        <SmallLightGrayText content={"Add clothes to your wardrobe"} />
      </View>

      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
        color={Colors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
