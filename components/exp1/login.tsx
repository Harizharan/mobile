import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
const App = () => {
  const onPressLogin = () => {
    // Do something about login operation };
    const onPressForgotPassword = () => {
      // Do something about forgot password operation
    };
    const onPressSignUp = () => {
      // Do something about signup operation };
      const [state, setState] = useState({ email: "", password: "" });

      return (
        <View style={styles.container}>
          <Text style={styles.title}> LOGIN</Text>{" "}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#ffffff"
              onChangeText={(text) => setState({ ...state, email: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#ffffff"
              onChangeText={(text) => setState({ ...state, password: text })}
            />
          </View>
          <TouchableOpacity onPress={onPressForgotPassword}>
            <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>{" "}
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN </Text>{" "}
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignUp}>
            <Text style={styles.forgotAndSignUpText}>Signup</Text>{" "}
          </TouchableOpacity>
          ;
        </View>
      );
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#353634",
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fff3db",
        marginBottom: 40,
      },
      inputView: {
        width: "80%",
        backgroundColor: "#f38630",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        borderWidth: 2,
        borderColor: "#ff6600",
      },
      inputText: {
        height: 50,
        color: "white",
      },
      forgotAndSignUpText: { color: "white", fontSize: 11 },
      loginBtn: {
        width: "80%",
        backgroundColor: "#fa6900",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
      },
      loginText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
      },
    });
  };
};
export default App;
