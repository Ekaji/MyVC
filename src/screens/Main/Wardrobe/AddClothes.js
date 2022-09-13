import { View, StyleSheet, Switch, Image } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import {
  BackButton,
  CurvedButton,
  UnderLinedButton,
} from "../../../components/Buttons";
import { Colors, ImageSet, SCREEN_WIDTH } from "../../../config/Constant";
import { H1, H3, SmallLightGrayText } from "../../../components/Texts";
import {
  bottomPopUpMessage,
  getListOfCountriesNames,
} from "../../../helpers/helpers";
import { ScrollView } from "react-native-gesture-handler";
import {
  MyVcBaseTextField,
  MyVcIconTextField,
} from "../../../components/TextFields";
import ModalDropdown from "react-native-modal-dropdown";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function AddClothes({ navigation, route }) {
  const navParams = route.params;
  console.log(navParams);
  var radio_props = [
    { label: "Top", value: 0 },
    { label: "Bottom", value: 1 },
    { label: "Shoes", value: 2 },
    { label: "Outerwear", value: 3 },
    { label: "Accessories", value: 4 },
  ];
  const [country, setCountry] = useState("Country");
  const [isEnabled, setIsEnabled] = useState(false);
  const [image, setImage] = useState(navParams.image ? navParams.image : null);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
      <ScrollView>
        <Image
          source={image ? { uri: image } : ImageSet.cloth_example_image}
          style={{
            flex: 1,
            width: SCREEN_WIDTH,
            height: 300,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
          }}
        >
          <H3
            content={"Remove background"}
            moreStyles={{
              color: Colors.gray700,
              fontWeight: "bold",
              marginBottom: 8,

              marginTop: 8,
            }}
          />

          <Switch
            trackColor={{ false: Colors.white, true: Colors.white }}
            thumbColor={Colors.black}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
              borderColor: Colors.gray700,
              borderWidth: 1,
              borderRadius: 15,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
          }}
        >
          <H3
            content={"Yes I own this Item"}
            moreStyles={{
              color: Colors.gray700,
              fontWeight: "bold",
              marginBottom: 8,

              marginTop: 8,
            }}
          />

          <Checkbox
            value={isEnabled}
            onValueChange={toggleSwitch}
            style={{
              transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
            }}
          />
        </View>

        <View>
          <H3
            content={"Select what category to save to*"}
            moreStyles={{
              color: Colors.gray700,

              marginBottom: 8,

              marginTop: 8,
            }}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              buttonColor={Colors.black}
              radioStyle={{
                margin: 4,
                backgroundColor: Colors.verylightGray,
                borderRadius: 10,
                padding: 4,
              }}
              labelStyle={{ color: Colors.black }}
              selectedButtonColor={Colors.black}
              formHorizontal={true}
              onPress={() => {
                console.log("hello");
              }}
            />
          </ScrollView>
        </View>
        <View
          style={{
            flex: 0.8,
            marginLeft: 16,
          }}
        >
          <MyVcBaseTextField
            headerText={"Name of Item"}
            placeholder={"Enter name of item"}
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />
          <MyVcBaseTextField
            headerText={"Item Description"}
            placeholder={"Enter item description"}
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />
          <MyVcIconTextField
            headerText={"Sub Category"}
            placeholder={"Enter sub category"}
            value={country}
            rightButton={
              <ModalDropdown
                options={getListOfCountriesNames()}
                onSelect={(index, value) => {
                  console.log(index, value);
                  setCountry(value);
                }}
                dropdownStyle={{
                  shadowColor: "#000000",
                  shadowOffset: {
                    width: 4,
                    height: 3,
                  },
                  shadowRadius: 3,
                  shadowOpacity: 0.25,
                }}
              />
            }
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />

          <MyVcIconTextField
            headerText={"Size"}
            placeholder={"Enter size"}
            value={country}
            rightButton={
              <ModalDropdown
                options={getListOfCountriesNames()}
                onSelect={(index, value) => {
                  console.log(index, value);
                  setCountry(value);
                }}
                dropdownStyle={{
                  shadowColor: "#000000",
                  shadowOffset: {
                    width: 4,
                    height: 3,
                  },
                  shadowRadius: 3,
                  shadowOpacity: 0.25,
                }}
              />
            }
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />
          <MyVcBaseTextField
            headerText={"Color"}
            placeholder={"Enter color"}
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />
          <MyVcBaseTextField
            headerText={"Brand"}
            placeholder={"Enter item brand"}
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />
          <MyVcBaseTextField
            headerText={"Comments"}
            placeholder={"Enter comments"}
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CurvedButton
            text={"Save to Wardrobe"}
            onPress={() => {
              navigation.goBack();
            }}
            moreStyles={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  button: {
    marginVertical: 8,
    width: "90%",
    height: 64,
    borderRadius: 32,
  },
});
