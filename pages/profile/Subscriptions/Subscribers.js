import React from "react";
import { ScrollView, Text, View } from "react-native";
import SubscribersCard from "../../../components/SubscribersCard";

const Subscribers = () => {
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "#813582", paddingVertical: 15, gap: 15 }}
      >
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
        <SubscribersCard />
      </View>
    </ScrollView>
  );
};

export default Subscribers;
