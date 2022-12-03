import { View, Text, StyleSheet } from "react-native";

import IconButton from "../UI/IconButton";

const Title = (props) => {
  const { changeTitleHandler } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <IconButton
        name="search"
        size={24}
        color="black"
        onPress={changeTitleHandler}
      />
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
});
