import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  const { name, size, color, onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Ionicons name={name} size={size} color={color} style={styles.icon} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
  },
  icon: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    backgroundColor: "#d6d4d4",
  },
});
