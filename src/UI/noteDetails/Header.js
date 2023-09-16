import { View, StyleSheet } from "react-native";

import IconButton from "../button/IconButton";
import TextButton from "../button/TextButton";

const Header = (props) => {
  const { addNewNote, deleteNote } = props;

  return (
    <View style={[styles.iconContainer]}>
      <IconButton
        name="chevron-back"
        size={30}
        color="black"
        onPress={() => addNewNote(true)}
      />
      <View
        style={[
          styles.iconContainer,
          {
            marginRight: 10,
          },
        ]}
      >
        <IconButton
          name="trash-outline"
          size={25}
          color="black"
          onPress={deleteNote}
        />
        <TextButton onPress={() => addNewNote(true)}>save</TextButton>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
