import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { evaluate } from "mathjs"; //import dependencies

const SciCal: React.FC = () => {
  const [expression, setExpression] = useState("");
  const handlePress = (value: string) => {
    setExpression((prev) => prev + value);
  };
  const handleClear = () => {
    setExpression("");
  };
  const handleBackspace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };
  const handleEvaluate = () => {
    try {
      setExpression(evaluate(expression).toString());
    } catch {}
    setExpression("Error");
  };
  const renderButton = (label: string, onPress: () => void) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={[styles.display]}>{expression}</Text>{" "}
      <View style={styles.row}>
        {renderButton("7", () => handlePress("7"))}{" "}
        {renderButton("8", () => handlePress("8"))}{" "}
        {renderButton("9", () => handlePress("9"))}{" "}
        {renderButton("DEL", handleBackspace)}
      </View>
      <View style={styles.row}>
        {renderButton("4", () => handlePress("4"))}{" "}
        {renderButton("5", () => handlePress("5"))}{" "}
        {renderButton("6", () => handlePress("6"))}{" "}
        {renderButton("+", () => handlePress("+"))}
      </View>
      <View style={styles.row}>
        {renderButton("1", () => handlePress("1"))}{" "}
        {renderButton("2", () => handlePress("2"))}{" "}
        {renderButton("3", () => handlePress("3"))}{" "}
        {renderButton("-", () => handlePress("-"))}
      </View>
      <View style={styles.row}>
        {renderButton("0", () => handlePress("0"))}{" "}
        {renderButton(".", () => handlePress("."))}
        {renderButton("=", handleEvaluate)}
        {renderButton("*", () => handlePress("*"))}{" "}
      </View>
      <View style={styles.row}>
        {renderButton("Clr", handleClear)}{" "}
        {renderButton("(", () => handlePress("("))}{" "}
        {renderButton(")", () => handlePress(")"))}{" "}
        {renderButton("/", () => handlePress("/"))}
      </View>
      <View style={styles.row}>
        {renderButton("sin", () => handlePress("sin("))}{" "}
        {renderButton("cos", () => handlePress("cos("))}{" "}
        {renderButton("tan", () => handlePress("tan("))}{" "}
        {renderButton("log", () => handlePress("log("))}
      </View>{" "}
      ;
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#54787d",
  },
  display: {
    fontSize: 32,
    backgroundColor: "#79b5ac",
    width: "90%",
    padding: 20,
    textAlign: "right",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#f38630",
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#f38630",
    padding: 20,
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default SciCal;
