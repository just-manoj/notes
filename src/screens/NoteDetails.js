import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LogBox } from "react-native";

import DateHeader from "../UI/noteDetails/DateHeader";
import Header from "../UI/noteDetails/Header";
import NoteDetailsBody from "../UI/noteDetails/NoteDetailsBody";
import { addNewNote, updateNote, deleteNote } from "../redux/NoteData";

const NoteDetails = ({ navigation, route }) => {
  const dispath = useDispatch();
  const { id, title, note, bgColor, date } = { ...route.params };
  const [inputValues, setInputValues] = useState({
    title: title ? title : "",
    note: note ? note : "",
  });
  const newDate = date ? date : new Date();

  LogBox.ignoreLogs([
    //Non-serializable warning for passing Date
    "Non-serializable values were found in the navigation state",
  ]);

  const changeInputValuesHandler = (id, data) => {
    setInputValues((inputValue) => {
      return { ...inputValue, [id]: data };
    });
  };

  const addNewNoteHandler = () => {
    const newNote = {
      id: id ? id : new Date().toString() + Math.random() * 100,
      title: inputValues.title,
      note: inputValues.note,
      date: new Date(),
      bgColor: bgColor ? bgColor : "#ffffff",
    };
    if (!route.params) dispath(addNewNote({ note: newNote }));
    else dispath(updateNote({ note: newNote }));
    navigation.navigate("list");
    console.log(newNote);
  };

  const deleteNoteHandler = () => {
    if (route.params) dispath(deleteNote({ id: id }));
    navigation.navigate("list");
  };

  return (
    <View style={styles.container}>
      <Header addNewNote={addNewNoteHandler} deleteNote={deleteNoteHandler} />
      <DateHeader date={newDate} />
      <NoteDetailsBody
        changeInputValues={changeInputValuesHandler}
        inputValues={inputValues}
      />
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
