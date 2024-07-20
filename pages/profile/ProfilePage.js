import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

export default function ProfilePage() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Link
            style={{ marginTop: 100 }}
            to={{ screen: "Subscription", params: { name: "Diana" } }}
          >
            Subscribers
          </Link>
          <Link
            style={{ marginTop: 100 }}
            to={{ screen: "Publications", params: { name: "Diana" } }}
          >
            Publications!!
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
