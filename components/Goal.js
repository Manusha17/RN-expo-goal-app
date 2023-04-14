import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import GoalItem from "./GoalItem";

const Goal = () => {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleTextInput = (text) => {
    setGoalText(text);
  };

  const handleAddGoal = (text) => {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type in your goal here!"
          style={{
            padding: 6,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#ccc",
          }}
          onChangeText={handleTextInput}
        />
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.addGoalBtn}
          onPress={handleAddGoal}
        >
          <Text style={styles.addGoalBtnText}>Add Goal</Text>
        </TouchableOpacity>
        {/* <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#F49D31" : "orange",
              shadowColor: "#171717",
            },
            styles.addGoalBtn,
          ]}
        >
          <Text style={styles.addGoalBtnText}>Add Goal</Text>
        </Pressable> */}
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          marginTop: 4,
          marginBottom: 14,
          paddingVertical: 6,
        }}
      >
        <FlatList
          data={goals}
          renderItem={(item) => {
            return <GoalItem goalText={item.item} />;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    padding: 10,
  },
  addGoalBtn: {
    marginTop: 8,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 24,
    backgroundColor: "orange",
  },
  addGoalBtnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Goal;
