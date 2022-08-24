import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../screens/Main/Explore";
import Account from "../screens/Main/Account";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
