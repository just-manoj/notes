import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useRef } from "react";

import InputText from "../../components/InputText";

const NoteDetailsBody = (props) => {
  const { changeInputValues, inputValues, addNewNote, changeSavingStatus } =
    props;

  const noteInput = React.createRef();
  const timeOut = useRef(null);

  const executeInNoteContent = () => {
    changeSavingStatus(true);
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      addNewNote();
      changeSavingStatus(false);
    }, 2500);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.inputContainer}>
        <InputText
          style={styles.title}
          placeholder="Title"
          onChangeText={changeInputValues.bind(this, "title")}
          onChange={executeInNoteContent}
          value={inputValues.title}
          returnKeyType="next"
          onSubmitEditing={() => noteInput.current.focus()}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <InputText
          style={styles.note}
          placeholder="Note here"
          multiline={true}
          autoFocus={true}
          onChangeText={changeInputValues.bind(this, "note")}
          onChange={executeInNoteContent}
          value={inputValues.note}
          ref={noteInput}
        />
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: 110,
  },
});
