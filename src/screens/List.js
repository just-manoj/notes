import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import NoteContent from "../UI/list/NoteContent";
import SearchBar from "../UI/list/SearchBar";
import FlatButton from "../UI/button/FlatButton";
import { storeNotes } from "../redux/NoteData";
import { fetchAllNotes } from "../utils/dataBase";

const List = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const isFocused = useIsFocused();

  const [notesData, setNotesData] = useState([]);

  const clearSearchText = () => {
    setSearchText("");
  };

  useEffect(() => {
    const storeNotesDetails = async () => {
      const fetchedNotes = await fetchAllNotes();
      fetchedNotes.filter((n) => {
        if (n.title === "") {
          n.title = n.note.split("\n")[0];
          n.note = n.note.slice(n.note.indexOf("\n"), n.note.length);
        }
        n.note = n.note.replace(/^\s*$(?:\r\n?|\n)/gm, "");
      });
      setNotesData(fetchedNotes);
    };
    if (isFocused) storeNotesDetails();
  }, [setNotesData, isFocused, storeNotes]);

  const naviationHandler = () => {
    navigation.navigate("noteDetails");
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        clearSearchText={clearSearchText}
      />
      <NoteContent notes={notesData} />
      <FlatButton onPress={naviationHandler} />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
