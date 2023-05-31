import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "273091585146-3hnjoc2tlurra4b1g4gnjgbk26m4ebvc.apps.googleusercontent.com",
    androidClientId:
      "273091585146-tuin7n3fkdo2fh2o92kf1373hj9eucn7.apps.googleusercontent.com",
    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {userInfo === null ? (
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome</Text>
            <Text style={{ fontSize: 16, marginBottom: 6 }}>
              Please login to continue
            </Text>
            <FontAwesome.Button
              name="google"
              backgroundColor="orange"
              borderRadius={12}
              disabled={!request}
              onPress={() => {
                promptAsync();
              }}
            >
              Login with Google
            </FontAwesome.Button>
          </View>
        ) : (
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Welcome {userInfo.name}
            </Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.loginText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        )}
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
