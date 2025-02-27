import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter username and password");
      return;
    }
    // Handle login logic here
    Alert.alert("Success", "Logged in successfully!");
  };

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>Welcome Back</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Option */}
      <Text style={styles.signupText}>
        Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    width: 300,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FF6B00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  signupText: {
    color: "#aaa",
    marginTop: 20,
    fontSize: 14,
  },
  signupLink: {
    color: "#FF6B00",
    fontWeight: "bold",
  },
});

export default LoginScreen;
