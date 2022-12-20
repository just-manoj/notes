import { View, StyleSheet } from "react-native";
import DateHeader from "../UI/noteDetails/DateHeader";

import Header from "../UI/noteDetails/Header";
import NoteDetailsBody from "../UI/noteDetails/NoteDetailsBody";

const NoteDetails = () => {
  return (
    <View style={styles.container}>
      <Header />
      <DateHeader />
      <NoteDetailsBody />
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 5,
  },
});
