import { NavigationContainer } from "@react-navigation/native";

import OnboradingStack from "./OnboardingStack";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <OnboradingStack />
    </NavigationContainer>
  );
}
