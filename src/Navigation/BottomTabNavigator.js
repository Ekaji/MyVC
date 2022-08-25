import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../screens/Main/Explore";
import Account from "../screens/Main/Account";
import Outfit from "../screens/Main/Outfit";
import { ImageSet } from "../config/Constant";
import SingleTab from "../components/SingleTab";
import { View,StyleSheet, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    name: "myCloset",
    component: Explore,
    focusedImage: ImageSet.wardrobe_white,
    unfocusedImage: ImageSet.wardrobe_black,
  },
  {
    name: "myOutfit",
    component: Outfit,
    focusedImage: ImageSet.shirt_outline_white,
    unfocusedImage: ImageSet.shirt_black,
  },
  {
    name: "myProfile",
    component: Account,
    focusedImage: ImageSet.user_white,
    unfocusedImage: ImageSet.user_black,
  },
];

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const item = TabArr[index];
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <SingleTab
              onPress={onPress}
              text={item.name}
              focused={isFocused}
              imageUrl_focused={item.focusedImage}
              imageUrl_unfocused={item.unfocusedImage}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      {TabArr.map((item, index, route) => {
        return (
          <Tab.Screen key={index} name={item.name} component={item.component} />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    height: 60,
    width: "100%",
  },
});
