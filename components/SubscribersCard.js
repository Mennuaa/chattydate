import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SubscribersCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../assets/images/subscriberAvatar.png")}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
            marginLeft: 9,
          }}
        >
          Ed Sheeran
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.17)",
              width: 30,
              height: 30,
              borderRadius: 5000,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("../assets/images/chatIcon.png")} />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.17)",
              borderRadius: 30,
              marginLeft: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingVertical: 6,
                paddingHorizontal: 10,
              }}
            >
              Удалить
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderColor: "#E9A7D7", // Border color
    borderWidth: 2, // Border width
    borderRadius: 5000, // Optional: for rounded corners or circular shape
  },
});
export default SubscribersCard;
