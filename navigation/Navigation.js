import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import Questionnaire from '../pages/questionnaire/Questionnaire';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from '../pages/profile/ProfilePage';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="Questionnaire" component={Questionnaire} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
 function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfilePage} />
    </Stack.Navigator>
  );
}
export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      isAuthenticated ? <AppNavigator /> : <AuthNavigator />
  );
}

const styles = StyleSheet.create({});
