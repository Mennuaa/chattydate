import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import Questionnaire from "../pages/questionnaire/Questionnaire";
import ProfilePage from "../pages/profile/ProfilePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SubscribersPage from "../pages/profile/Subscriptions/SubscribersPage";
import { LinearGradient } from "expo-linear-gradient";
import PublicationsPage from "../pages/profile/PublicationsPage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Questionnaire"
        component={Questionnaire}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Tabs"
        component={Tabs}
      />
      <Stack.Screen
        name="Subscription"
        component={SubscribersPage}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize: 30 },
          headerStyle: {
            backgroundColor: "#A6499B",
          },
          headerTintColor: "white",
        })}
      />
      <Stack.Screen
        name="Publications"
        component={PublicationsPage}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize: 30 },
          headerStyle: {
            backgroundColor: "#A6499B",
          },
          headerTintColor: "white",
        })}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}

const styles = StyleSheet.create({});
