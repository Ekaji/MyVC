import { createStackNavigator } from "@react-navigation/stack";
import Outfit from "../screens/Main/GenerateOutfit/Outfit";
import GeneratedOutfit from "../screens/Main/GenerateOutfit/GeneratedOutfit";
import EditCloth from "../screens/Main/GenerateOutfit/EditCloth";

const Stack = createStackNavigator();

export default function GenerateOutfitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Outfit"
        component={Outfit}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="GeneratedOutfit"
        component={GeneratedOutfit}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="EditCloth"
        component={EditCloth}
      />
    </Stack.Navigator>
  );
}
