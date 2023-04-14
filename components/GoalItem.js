import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ goalText }) {
  return (
    <View style={styles.goalItem}>
      <Text>{goalText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#FFDBB0",
    marginBottom: 6,
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FEB75F",
  },
});
