import { View, ScrollView, StyleSheet } from "react-native";

import NoteItem from "./NoteItem";
import { firstColor, secondColor } from "../../utils/colors";

const NoteContent = (props) => {
  const { notes } = props;

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={[styles.full, styles.leftItemContainer]}>
          {notes
            .filter((_, index) => index % 2 !== 1)
            .map((item, index) => (
              <NoteItem {...item} bgColor={firstColor[index % 5]} />
            ))}
        </View>
        <View style={[styles.full, styles.rightIemContainer]}>
          {notes
            .filter((_, index) => index % 2)
            .map((item, index) => (
              <NoteItem {...item} bgColor={secondColor[index % 5]} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default NoteContent;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    marginTop: 10,
    borderRadius: 6,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  full: {
    flex: 1,
  },
  leftItemContainer: {
    marginLeft: 10,
    marginRight: 5,
  },
  rightIemContainer: {
    marginLeft: 5,
    marginRight: 10,
  },
  iconContainer: {
    padding: 5,
    backgroundColor: "blue",
    borderRadius: 30,
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
