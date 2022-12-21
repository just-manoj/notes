import { View, StyleSheet } from "react-native";

import InputText from "../../components/InputText";

const NoteDetailsBody = (props) => {
  const { changeInputValues, inputValues } = props;
  return (
    <>
      <View style={styles.inputContainer}>
        <InputText
          style={styles.title}
          placeholder="Title"
          autoFocus={true}
          onChangeText={changeInputValues.bind(this, "title")}
          value={inputValues.title}
        />
      </View>
      <View style={styles.inputContainer}>
        <InputText
          style={styles.note}
          placeholder="Note here"
          multiline={true}
          onChangeText={changeInputValues.bind(this, "note")}
          value={inputValues.note}
        />
      </View>
    </>
  );
};

export default NoteDetailsBody;

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 13,
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.8,
  },
  note: {
    fontSize: 17,
  },
});
