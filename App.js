import Settings from "./screens/Settings";
import Account from "./screens/Account";
import Security from "./screens/Security";
import Help from "./screens/Help";
import PersonalInfo from "./screens/PersonalInfo";
import AccountStatus from "./screens/AccountStatus";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Settings"
        component = {Settings}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "Account"
        component = {Account}
        options = {{title: "My Account"}}
        />
        <Stack.Screen
        name = "Security"
        component={Security}
        options={{title: "Privacy and Security"}}
        />
        <Stack.Screen
        name = "Help"
        component = {Help}
        />
        <Stack.Screen
        name = "AccountStatus"
        component = {AccountStatus}
        options = {{title: "Account Status"}}
        />
        <Stack.Screen
        name = "PersonalInfo"
        component = {PersonalInfo}
        options = {{title: "Personal Information"}}
        />
  
</Stack.Navigator>
    </NavigationContainer>
  );
  }
