import { SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Subscribers from "./Subscribers";
import Subscriptions from "./Subscriptions";

const SubscribersPage = () => {
  const route = useRoute();
  const { name } = route.params;
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#A6499B" }}>
      <View
        style={{
          flex: 1,
          marginTop: 30,
          backgroundColor: "#823681",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 32,
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
            tabBarLabelStyle: { fontSize: 16 },
            tabBarStyle: {
              backgroundColor: "#813582",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            tabBarIndicatorStyle: { backgroundColor: "white" },
          }}
        >
          <Tab.Screen name="220 Подписчики" component={Subscribers} />
          <Tab.Screen name="47 Подписки" component={Subscriptions} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default SubscribersPage;
