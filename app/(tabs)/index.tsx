import { Image, StyleSheet, Platform, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function HomeScreen() {
  const width = useSharedValue(100);
  const translateX = useSharedValue<number>(0);

  const handleOnPress = () => {
    translateX.value = translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX.value * 2),
      },
    ],
  }));

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View
        style={[
          {
            width: 300,
            height: 100,
            backgroundColor: "violet",
          },
          animatedStyles,
        ]}
      />

      <Button onPress={handleOnPress} title="Press me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
