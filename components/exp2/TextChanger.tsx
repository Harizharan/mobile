import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TextChanger: React.FC = () => {
  const [fontSize, setFontSize] = useState(20);
  const [color, setColor] = useState("#fff3db");
  const increaseFontSize = () => setFontSize((prevSize) => prevSize + 2);
  const decreaseFontSize = () =>
    setFontSize((prevSize) => Math.max(prevSize - 2, 1));
  const toggleColor = () =>
    setColor((prevColor) => (prevColor === "#fff3db" ? "#ff6600" : "#fff3db"));
  return (
    <View style={styles.container}>
      <Text style={{ fontSize, color, marginBottom: 20, fontWeight: "bold" }}>
        {" "}
        SAMPLE TEXT{" "}
      </Text>
      <View style={styles.buttonContainer}>
        <View style={{ marginBottom: 10 }}>
          <Button title="Increase Font Size" onPress={increaseFontSize} />
        </View>
        <View style={{ marginBottom: 5 }}>
          <Button
            color={"#005bc5"}
            title="Decrease Font Size"
            onPress={decreaseFontSize}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            color={"#f38630"}
            title="Toggle Color"
            onPress={toggleColor}
          />{" "}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
});
export default TextChanger;
