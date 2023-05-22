import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import GoalItem from "./GoalItem";

const Goal = () => {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const onDelete = (index) => {
    if (index > -1)
      setGoals((currentGoals) => {
        const currentGoalsCopy = [...currentGoals];
        currentGoalsCopy.splice(index, 1);
        return currentGoalsCopy;
      });
  };

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
        <TouchableHighlight underlayColor="white" onPress={handleAddGoal}>
          <View style={styles.addGoalBtn}>
            <Text style={styles.addGoalBtnText}>Add Goal</Text>
          </View>
        </TouchableHighlight>
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
      <View style={{ borderTopWidth: 1, borderTopColor: "#ccc" }}></View>
      {goals.length > 0 ? (
        <FlatList
          data={goals}
          renderItem={({ item, index }) => {
            return (
              <GoalItem
                goalText={item}
                key={index}
                onDelete={() => onDelete(index)}
              />
            );
          }}
          alwaysBounceVertical={false}
          contentContainerStyle={{
            marginTop: 4,
            marginBottom: 14,
            paddingVertical: 6,
          }}
        ></FlatList>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={styles.noGoalsText}>No Goals Added Yet!</Text>
        </View>
      )}
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
  noGoalsText: {
    color: "#FBB25A",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Goal;
