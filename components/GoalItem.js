import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function GoalItem({ goalText }) {
  return (
    <View style={styles.goalItem}>
      <Text style={{ flexWrap: "nowrap", flex: 1 }}>{goalText}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.4}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
          style={styles.completeBtn}
        >
          <Ionicons name="checkmark" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
          style={styles.deleteBtn}
        >
          <Ionicons name="md-trash-outline" size={18} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFDBB0",
    marginBottom: 6,
    paddingHorizontal: 8,
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FEB75F",
    gap: 4,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 6,
  },
  completeBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 1,
    paddingHorizontal: 2,
  },
  deleteBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 2,
    borderColor: "red",
  },
});
