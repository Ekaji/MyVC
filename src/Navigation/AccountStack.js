import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Main/Account/Account';
import ChangePassword from '../screens/Main/Account/change-password';
import NewPassword from '../screens/Main/Account/change-password/NewPassword';
import EditProfile from '../screens/Main/Account/EditProfile';

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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="NewPassword"
        component={NewPassword}
      />
    </Stack.Navigator>
  );
}
