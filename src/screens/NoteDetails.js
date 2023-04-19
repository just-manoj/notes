import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { LogBox } from "react-native";

import DateHeader from "../UI/noteDetails/DateHeader";
import Header from "../UI/noteDetails/Header";
import NoteDetailsBody from "../UI/noteDetails/NoteDetailsBody";
import {
  deleteNoteInDb,
  fetchOneNote,
  insertDataToDb,
  updateNoteInDb,
} from "../utils/dataBase";
import Notes from "../utils/Notes";

const NoteDetails = ({ navigation, route }) => {
  const { id, bgColor, updateLocal } = { ...route.params };

  const [oldNoteData, setOldNoteData] = useState({
    title: "",
    note: "",
  });
  const [inputValues, setInputValues] = useState({
    title: "",
    note: "",
    date: new Date(),
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
        oldNoteData.title === inputValues.title &&
        oldNoteData.note === inputValues.note
      )
    ) {
      if (!id) {
        await insertDataToDb(newNote);
      } else {
        updateLocal(newNote);
        await updateNoteInDb(newNote);
      }
    }
    if (inputValues.note == "" && inputValues.title == "") deleteNoteHandler();
    navigation.navigate("list");
  };

  const deleteNoteHandler = () => {
    if (route.params) {
      deleteNoteInDb(id);
    }
    navigation.navigate("list");
  };

  useEffect(() => {
    const fetchOneNoteData = async () => {
      const thisNote = await fetchOneNote(id);
      setOldNoteData({ note: thisNote.note, title: thisNote.title });
      setInputValues({
        title: thisNote.title,
        note: thisNote.note,
        date: new Date(thisNote.date),
      });
    };
    if (id) {
      fetchOneNoteData();
    }
  }, [setOldNoteData, setInputValues, fetchOneNote]);
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Header addNewNote={addNewNoteHandler} deleteNote={deleteNoteHandler} />
      <DateHeader date={inputValues.date} />
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
