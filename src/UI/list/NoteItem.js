import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { dayFormat, timeFormat } from "../../utils/date";

const NoteItem = (props) => {
  const { title, note, id, date, bgColor } = props;
  const navigation = useNavigation();

  const navigateDetailsPage = () => {
    navigation.navigate("noteDetails", { id: id, bgColor: bgColor });
  };

  return (
    <Pressable
      key={id}
      style={[styles.container, { backgroundColor: bgColor }]}
      onPress={navigateDetailsPage}
    >
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.noteContainer}>
        {note.length != "" && (
          <Text style={styles.note} numberOfLines={5}>
            {note}
          </Text>
        )}
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{dayFormat(date)}</Text>
        <Text style={styles.date}> {timeFormat(date)}</Text>
      </View>
    </Pressable>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  container: {
    maxHeight: 400,
    marginVertical: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    overflow: "hidden",
  },
  title: {
    fontWeight: "600",
    fontSize: 17.5,
  },
  noteContainer: {
    maxHeight: 150,
  },
  note: {
    paddingTop: 3,
    fontSize: 17,
    lineHeight: 25,
    opacity: 0.7,
  },
  dateContainer: {
    flexDirection: "row",
    paddingTop: 5,
  },
  date: {
    fontSize: 10,
    opacity: 0.54,
  },
});
