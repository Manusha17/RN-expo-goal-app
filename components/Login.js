import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome</Text>
        <Text style={{ fontSize: 16 }}>Please login to continue</Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginText}>Click to login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    marginTop: 6,
    padding: 8,
    borderRadius: 12,
    backgroundColor: "orange",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Login;
