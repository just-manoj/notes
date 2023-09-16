import { View, StyleSheet, Text, BackHandler } from "react-native";
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
  const { id, bgColor } = { ...route.params };

  const [oldNoteData, setOldNoteData] = useState({
    title: "",
    note: "",
  });
  const [inputValues, setInputValues] = useState({
    title: "",
    note: "",
    date: new Date(),
  });

  const [savingStatus, setSavingStatus] = useState(null);

  const [noteId, setNoteId] = useState(id);

  LogBox.ignoreLogs([
    //Non-serializable warning for passing Date
    "Non-serializable values were found in the navigation state",
  ]);

  const changeSavingStatus = (status) => {
    if (status) setSavingStatus("Saving...");
    else setSavingStatus("Saved.");
  };

  const changeInputValuesHandler = (id, data) => {
    setInputValues((inputValue) => {
      return { ...inputValue, [id]: data };
    });
  };

  const addNewNoteHandler = async (goBack) => {
    const newNote = new Notes(
      noteId,
      inputValues.title,
      inputValues.note,
      new Date()
    );
    // console.log(newNote);
    if (
      !(
        oldNoteData.title === inputValues.title &&
        oldNoteData.note === inputValues.note
      )
    ) {
      if (!noteId) {
        const res = await insertDataToDb(newNote);
        setNoteId(res.insertId);
      } else {
        await updateNoteInDb(newNote);
      }
    }
    if (goBack) navigation.navigate("list");
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
        changeSavingStatus={changeSavingStatus}
        addNewNote={addNewNoteHandler}
        changeInputValues={changeInputValuesHandler}
        inputValues={inputValues}
      />
      <View style={styles.savingsTagContainer}>
        <Text style={styles.savings}>
          {savingStatus !== null && savingStatus}
        </Text>
      </View>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingTop: 30,
    paddingHorizontal: 5,
    paddingBottom: 13,
  },
  savingsTagContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  savings: {
    fontSize: 15,
    fontWeight: "400",
  },
});
