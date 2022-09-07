import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Main/Account/Account";
import EditProfile from "../screens/Main/Account/EditProfile";
import ChangePassword from "../screens/Main/Account/ChangePassword";

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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ChangePassword"
        component={ChangePassword}
      />
    </Stack.Navigator>
  );
}
