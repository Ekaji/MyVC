import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
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
import CategoryItem from "../../components/CategoryItem";
import Cloth from "../../components/Cloth";

const clothStyles = ["All", "Outwear", "Tops", "Bottoms"];

const Items = ["", "", "", ""];

/// array of 1000 random numbers
const randomNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 1000)
);

export default function Outfit() {
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
          content={"Generate Outfit"}
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
      <View>
        <ScrollView
          horizontal
          style={{
            flexDirection: "row",
            borderBottomColor: Colors.verylightGray,
            borderBottomWidth: 1,
          }}
        >
          {clothStyles.map((item, index) => {
            return (
              <CategoryItem
                text={item}
                key={index}
                selected={false}
                onPress={() => {
                  bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
                }}
              />
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={randomNumbers}
        renderItem={({ item }) => (
          <Cloth
            imageUrl={ImageSet.cloth_example_image}
            moreStyles={{
              marginVertical: 8,
            }}
            checkbox={item % 2 === 0}
          />
        )}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginHorizontal: 16,
        }}
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
