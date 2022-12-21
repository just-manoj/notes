import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";

import DateHeader from "../UI/noteDetails/DateHeader";
import Header from "../UI/noteDetails/Header";
import NoteDetailsBody from "../UI/noteDetails/NoteDetailsBody";
import { addNewNote } from "../redux/NoteData";

const NoteDetails = ({ navigation }) => {
  const dispath = useDispatch();
  const [inputValues, setInputValues] = useState({
    title: "",
    note: "",
  });
  const date = new Date();

  const changeInputValuesHandler = (id, data) => {
    setInputValues((inputValue) => {
      return { ...inputValue, [id]: data };
    });
  };

  const addNewNoteHandler = () => {
    const newNote = {
      id: date.toString() + Math.random() * 100,
      title: inputValues.title,
      note: inputValues.note,
      date: date,
      bgColor: "#ffffff",
    };
    dispath(addNewNote({ note: newNote }));
    navigation.navigate("list");
    console.log(newNote);
  };

  return (
    <View style={styles.container}>
      <Header addNewNote={addNewNoteHandler} />
      <DateHeader date={date} />
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
