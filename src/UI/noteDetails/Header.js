import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IconButton from "../button/IconButton";
import TextButton from "../button/TextButton";

const Header = (props) => {
  const { addNewNote, deleteNote } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.iconContainer}>
      <IconButton
        name="chevron-back"
        size={30}
        color="black"
        onPress={() => {
          navigation.goBack();
        }}
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
        <TextButton onPress={addNewNote}>save</TextButton>
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
