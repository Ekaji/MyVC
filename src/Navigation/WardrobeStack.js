import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../screens/Main/Wardrobe/Explore";
import Gallery from "../screens/Main/Wardrobe/Gallery";
import ScanUpc from "../screens/Main/Wardrobe/ScanUpc";
import SnapPhoto from "../screens/Main/Wardrobe/SnapPhoto";
import SearchUpc from "../screens/Main/Wardrobe/SearchUpc";

const Stack = createStackNavigator();
const Screens = [
  {
    name: "Explore",
    component: Explore,
  },
  {
    name: "Gallery",
    component: Gallery,
  },
  {
    name: "ScanUpc",
    component: ScanUpc,
  },
  {
    name: "SnapPhoto",
    component: SnapPhoto,
  },
  {
    name: "SearchUpc",
    component: SearchUpc,
  },
];

export default function WardrobeStack() {
  return (
    <Stack.Navigator>
      {Screens.map((screen, index) => {
        return (
          <Stack.Screen
            key={index}
            options={{
              headerShown: false,
            }}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </Stack.Navigator>
  );
}
