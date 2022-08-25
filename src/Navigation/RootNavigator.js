import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import OnboradingStack from "./OnboardingStack";

import { useSelector, useDispatch } from "react-redux";

export default function RootNavigator() {
  const userIsAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <NavigationContainer>
      {userIsAuthenticated ? <BottomTabNavigator /> : <OnboradingStack />}
    </NavigationContainer>
  );
}
