import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Main/Account/Account";

const Stack = createStackNavigator();

export default function AccounStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Account"
        component={Account}
      />
    </Stack.Navigator>
  );
}
