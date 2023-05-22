import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CompletedGoals() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={styles.noGoalsText}>No Completed Goals Yet!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noGoalsText: {
    color: "#FBB25A",
    textAlign: "center",
    fontSize: 16,
  },
});
