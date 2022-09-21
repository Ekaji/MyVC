import { createStackNavigator } from "@react-navigation/stack";
import AuthenticationConfirmation from "../screens/Onboarding/AuthenticationConfirmation";
import Home from "../screens/Onboarding/Home";
import SignUp from "../screens/Onboarding/SignUp";

const Stack = createStackNavigator();

export default function OnboradingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AuthenticationConfirmation"
        component={AuthenticationConfirmation}
      />
    </Stack.Navigator>
  );
}
