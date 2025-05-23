import Animated, { useSharedValue, withTiming, useAnimatedStyle, withRepeat, withSequence } from "react-native-reanimated";
import { View, Button, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  const offset = useSharedValue<number>(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const OFFSET = 40;
  const TIME = 250;

  const handlePress = () => {
    offset.value = withSequence(withTiming(-OFFSET, { duration: TIME / 2 }), withRepeat(withTiming(OFFSET, { duration: TIME }), 2), withTiming(0, { duration: TIME / 2 }));
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button title="shake" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    margin: 50,
    borderRadius: 15,
    backgroundColor: "#b58df1",
  },
});
