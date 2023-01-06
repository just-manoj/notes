import { View, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useRef } from "react";

import InputText from "../../components/InputText";

const NoteDetailsBody = (props) => {
  const { changeInputValues, inputValues } = props;

  const noteInput = React.createRef();

  return (
    <>
      <View style={styles.inputContainer}>
        <InputText
          style={styles.title}
          placeholder="Title"
          onChangeText={changeInputValues.bind(this, "title")}
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
          value={inputValues.note}
          ref={noteInput}
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
