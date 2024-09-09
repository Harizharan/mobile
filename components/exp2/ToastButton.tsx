import React from "react";
import { View, Button } from "react-native";
import Toast from "react-native-toast-message";

const ToastButton: React.FC = () => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is a toast message!",
    });
  };
  return (
    <View style={{ margin: 50, alignItems: "center" }}>
      <Button color={"#f38630"} title="Show Toast" onPress={showToast} />
      <Toast />
    </View>
  );
};
export default ToastButton;
