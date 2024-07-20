import { Image, Text, TouchableOpacity, View } from "react-native";
import HeartButton from "./HeartButton";

const PublicationsCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/images/subscriberAvatar.png")} />
        <View>
          <Text style={{ fontSize: 14, fontWeight: 800, color: "white" }}>
            Ed Sheeran{" "}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: 400, color: "white" }}>
            Красивая{" "}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 12,
                color: "rgba(250,250,250,0.5)",
              }}
            >
              3ч.
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, color: "rgba(250,250,250,0.5)" }}>
                Ответить
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <HeartButton />
    </View>
  );
};

export default PublicationsCard;
