import { View, StyleSheet } from "react-native";

import InputText from "../../components/InputText";

const NoteDetailsBody = () => {
  return (
    <>
      <View style={styles.inputContainer}>
        <InputText placeholder="Title" autoFocus={true} style={styles.title} />
      </View>
      <View style={styles.inputContainer}>
        <InputText
          placeholder="Note here"
          style={styles.note}
          multiline={true}
        />
      </View>
    </>
  );
};

export default NoteDetailsBody;

const styles = StyleSheet.create({
  inputContainer: { marginLeft: 9, marginTop: 5 },
  title: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.8,
  },
  note: {
    fontSize: 17,
  },
});
