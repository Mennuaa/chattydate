import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Animated } from "react-native";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AnimatedGradient ({ style, children })  {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 7000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const interpolateColors = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#8B61EB', '#D13297', '#8B61EB'],
  });

  return (
    <AnimatedLinearGradient
      colors={[interpolateColors, '#D13297']}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 0.9, y: 0.9 }}
      style={style}
    >
      {children}
    </AnimatedLinearGradient>
  );
};
