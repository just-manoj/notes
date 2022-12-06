import { View, StyleSheet } from "react-native";

import IconButton from "./IconButton";

const FlatButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <IconButton name="add" size={50} color="#660066" onPress={() => {}} />
      </View>
    </View>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    right: 30,
    bottom: 40,
    opacity: 0.9,
  },
  iconContainer: {
    backgroundColor: "#ffc0cb",
    borderRadius: 60,
  },
});
