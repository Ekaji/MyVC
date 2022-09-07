import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import SingleTab from "../../../components/SingleTab";
import React from "react";
import { Colors, ImageSet } from "../../../config/Constant";
import { FloatingAction } from "react-native-floating-action";
import Header from "../../../components/Header";
import {
  BackButton,
  CurvedButton,
  DropDownhButton,
  FilterButton,
  ModalButton,
  SearchButton,
} from "../../../components/Buttons";
import { H1, H3, SmallLightGrayText } from "../../../components/Texts";
import { bottomPopUpMessage } from "../../../helpers/helpers";
import CategoryItem from "../../../components/CategoryItem";
import Cloth from "../../../components/Cloth";
import { useState } from "react";
import ModalWrapper from "../../../components/ModalWrapper";

const clothStyles = ["All", "Outwear", "Tops", "Bottoms"];

/// array of 1000 random numbers
const randomNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 1000)
);

export default function Outfit({ navigation }) {
  const [modalVisisble, setModalVisible] = useState(false);
  const [currentEditedCloth, setCurrentEditedCloth] = useState({});
  const [currentSelectedClothes, setCurrentSelectedClothes] = useState([]);

  const addToSelectedClothes = (cloth) => {
    if (currentSelectedClothes.includes(cloth)) {
      const newClothes = currentSelectedClothes.filter((c) => c !== cloth);
      setCurrentSelectedClothes(newClothes);
    } else {
      setCurrentSelectedClothes([...currentSelectedClothes, cloth]);
    }
  };
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
            onPressEdit={() => {
              setModalVisible(true);
            }}
            onClickCheckBox={() => {
              addToSelectedClothes(item);
              console.log("selected clothes", currentSelectedClothes);
            }}
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
      <EditClothModal
        visible={modalVisisble}
        onBackdropPress={() => {
          setModalVisible(!modalVisisble);
        }}
        onPressEdit={() => {
         navigation.navigate("EditCloth");
         setModalVisible(!modalVisisble);
        }}
        onPressRemove={() => {
          bottomPopUpMessage("BACKEND NOT IMPLEMENTED");
        }}
      />

      <GenerateButton
        visible={currentSelectedClothes.length > 0}
        onPress={() => {
          navigation.navigate("GeneratedOutfit");
        }}
      />
    </View>
  );
}

const EditClothModal = ({
  onPressEdit,
  onPressRemove,
  visible,
  onBackdropPress,
}) => {
  return (
    <ModalWrapper isVisible={visible} onBackdropPress={onBackdropPress}>
      <ModalButton
        text={"Edit Item"}
        onPress={() => {
          onPressEdit();
        }}
      />
      <ModalButton
        text={"Remove from your closet"}
        onPress={() => {
          onPressRemove();
        }}
      />
    </ModalWrapper>
  );
};

const GenerateButton = ({ visible, onPress }) => {
  return visible ? (
    <CurvedButton
      text={"Generate"}
      moreStyles={{
        width: 110,
        position: "absolute",
        bottom: 16,
        right: 16,
        borderWidth: 5,
        bord1erColor: Colors.verylightGray,
        shadowRadius: 10,
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 3,
          height: 2,
        },
      }}
      onPress={() => {
        onPress();
      }}
    />
  ) : null;
};

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
