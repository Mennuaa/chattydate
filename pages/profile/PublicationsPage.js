import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import PublicationsCard from "../../components/PublicationsCard";

const PublicationsPage = () => {
  const route = useRoute();
  const { name } = route.params;

  const [text, setText] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#BA48BE",
        paddingTop: 30,
        position: "relative",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: 55,
            maxWidth: 390,
            marginHorizontal: "auto",
          }}
        >
          <View>
            <Image
              style={{
                position: "absolute",
                top: -50,
                right: 0,
                left: 0,
                zIndex: 2,
              }}
              source={require("../../assets/images/decorationProfileImage.png")}
            />
            <Image
              style={{
                maxWidth: 390,
                maxHeight: 390,
                borderColor: "#E9A7D7",
                borderWidth: 2,
                borderRadius: 30,
                position: "relative",
                zIndex: 3,
              }}
              resizeMode="cover"
              source={require("../../assets/images/profileImage.png")}
            />
            <BlurView
              style={{
                position: "absolute",
                zIndex: 4,
                bottom: 14,
                left: 14,
                borderRadius: 20,
              }}
              intensity={50}
              tint={"light"}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  gap: 5,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "300" }}
                >
                  59
                </Text>
                <Image source={require("../../assets/images/heartIcon.png")} />
              </View>
            </BlurView>
            <BlurView
              style={{
                position: "absolute",
                zIndex: 4,
                bottom: 14,
                left: 89,
                borderRadius: 20,
                padding: 10,
              }}
              intensity={50}
              tint={"light"}
            >
              <Image source={require("../../assets/images/telegramIcon.png")} />
            </BlurView>
          </View>
          <View style={{ paddingHorizontal: 32 }}>
            <Text
              style={{
                textAlign: "right",
                color: "rgba(250,250,250,0.7)",
                fontSize: 12,
                marginTop: 16,
              }}
            >
              26 ноября 2022 г.
            </Text>
            <Text style={{ fontSize: 30, fontWeight: 800, color: "white" }}>
              {name}
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus, qui
              blanditiis praesentium voluptatum deleniti atque corrupti, quos
              dolores et quas molestias excepturi sint.
            </Text>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  textAlign: "center",
                  paddingVertical: 6,
                  paddingHorizontal: 16,
                  borderColor: "white",
                  borderWidth: 2,
                  color: "white",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                Комментарий (3)
              </Text>
              <PublicationsCard />
              <PublicationsCard />
              <PublicationsCard />
              <PublicationsCard />
              <PublicationsCard />
              <PublicationsCard />
              <PublicationsCard />
              <PublicationsCard />
              <PublicationsCard />
            </View>
          </View>
        </View>
        <View
          style={{
            maxWidth: 326,
            position: "absolute",
            bottom: 20,
            left: "50%",
            width: "100%",
            transform: [{ translateX: -163 }],
            marginHorizontal: "auto",
          }}
        >
          <TextInput
            style={{
              height: 40,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 30,
              paddingVertical: 12,
              paddingLeft: 24,
              fontSize: 16,
            }}
            placeholder="Добавить комментарии"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
          <View
            style={{
              backgroundColor: "#AE46FF",
              position: "absolute",
              right: 16,
              top: "50%",
              borderRadius: 30,
              height: 30,
              width: 30,
              justifyContent: "center",
              alignItems: "center",
              transform: [{ translateY: -15 }],
            }}
          >
            <TouchableOpacity>
              <Image source={require("../../assets/images/sendIcon.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PublicationsPage;
