import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { LogBox } from "react-native";

import DateHeader from "../UI/noteDetails/DateHeader";
import Header from "../UI/noteDetails/Header";
import NoteDetailsBody from "../UI/noteDetails/NoteDetailsBody";
import {
  deleteNoteInDb,
  insertDataToDb,
  updateNoteInDb,
} from "../utils/dataBase";
import Notes from "../utils/Notes";

const NoteDetails = ({ navigation, route }) => {
  const { id, title, note, bgColor, date } = { ...route.params };

  const oldTitle = title;
  const oldNote = note;

  const newDate = date ? date : new Date();

  const [inputValues, setInputValues] = useState({
    title: title ? title : "",
    note: note ? note : "",
  });

  LogBox.ignoreLogs([
    //Non-serializable warning for passing Date
    "Non-serializable values were found in the navigation state",
  ]);

  const changeInputValuesHandler = (id, data) => {
    setInputValues((inputValue) => {
      return { ...inputValue, [id]: data };
    });
  };

  const addNewNoteHandler = async () => {
    const newNote = new Notes(
      id ? id : "",
      inputValues.title,
      inputValues.note,
      new Date()
    );
    if (
      !(
        (oldTitle === inputValues.title && oldNote === inputValues.note) ||
        (inputValues.note == "" && inputValues.title == "")
      )
    ) {
      if (!route.params) {
        await insertDataToDb(newNote);
      } else {
        updateNoteInDb(newNote);
      }
    }
    navigation.navigate("list");
  };

  const deleteNoteHandler = () => {
    if (route.params) {
      deleteNoteInDb(id);
    }
    navigation.navigate("list");
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
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
    paddingTop: 30,
    paddingHorizontal: 5,
  },
});
