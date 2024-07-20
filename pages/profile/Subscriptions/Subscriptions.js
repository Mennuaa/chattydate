import React from "react";
import { ScrollView, Text, View } from "react-native";
import SubscriptionsCard from "../../../components/SubscriptionsCard";
import SortDropdown from "../../../components/SortDropdown";

const Subscriptions = () => {
  const handleSort = (option) => {
    console.log("Selected option:", option);
  };
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "#813582", paddingVertical: 15, gap: 15 }}
      >
        <SortDropdown onSelect={handleSort} />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
      </View>
    </ScrollView>
  );
};

export default Subscriptions;
