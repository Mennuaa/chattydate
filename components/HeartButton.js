import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";

const HeartButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    // Симуляция получения данных с сервера
    const fetchData = async () => {
      const initialCount = 100; // Например, значение с сервера
      setCount(initialCount);
    };

    fetchData();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(liked ? 1 : 1.5, {}, () => {
      scale.value = withSpring(1);
    });
    setLiked(!liked);
    setCount((prevCount) => prevCount + (liked ? -1 : 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View style={animatedStyle}>
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            size={15}
            color="red"
          />
        </Animated.View>
      </TouchableOpacity>
      <Text style={liked ? styles.countText : styles.countTextActive}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#BE1E2D",
  },
  countTextActive: {
    marginLeft: 4,
    fontSize: 12,
    color: "rgba(250,250,250,0.5)",
  },
});

export default HeartButton;
