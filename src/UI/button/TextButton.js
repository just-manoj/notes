import { Text, Pressable, StyleSheet, View } from "react-native";

const TextButton = (props) => {
  const { children, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.7 }}
    >
      <View
        style={{
          padding: 7,
          borderRadius: 10,
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 16.5,
  },
});
