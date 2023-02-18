import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import NoteContent from "../UI/list/NoteContent";
import SearchBar from "../UI/list/SearchBar";
import FlatButton from "../UI/button/FlatButton";
import { fetchAllNotes } from "../utils/dataBase";

const List = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const isFocused = useIsFocused();

  const [notesData, setNotesData] = useState([]);
  const [tempNotesData, setTempNotesData] = useState([]);
  const [titleState, setTitleState] = useState(false);

  const clearSearchText = () => {
    setNotesData(tempNotesData);
    setSearchText("");
  };

  useEffect(() => {
    const storeNotesDetails = async () => {
      const fetchedNotes = await fetchAllNotes();
      fetchedNotes.filter((n) => {
        if (n.title === "") {
          n.title = n.note.split("\n")[0];
          n.note = n.note.slice(n.note.indexOf("\n"), n.note.length - 1);
        }
        n.note = n.note.replace(/^\s*$(?:\r\n?|\n)/gm, "");
      });

      setNotesData(fetchedNotes);
      setTempNotesData(fetchedNotes);
    };
    if (isFocused) {
      if (!titleState) {
        storeNotesDetails();
      }
      // getSearchInput(searchText);
      console.log(searchText);
    }
  }, [setNotesData, isFocused]);

  const naviationHandler = () => {
    navigation.navigate("noteDetails");
  };

  const getSearchInput = (inp) => {
    setSearchText(inp);
    setNotesData(
      tempNotesData.filter((item) => {
        return (
          item.note.toUpperCase().indexOf(inp.toUpperCase()) !== -1 ||
          item.title.toUpperCase().indexOf(inp.toUpperCase()) !== -1
        );
      })
    );
  };

  const changeTitleHandler = () => {
    setNotesData(tempNotesData);
    setSearchText("");
    setTitleState(!titleState);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        changeTitleHandler={changeTitleHandler}
        titleState={titleState}
        searchText={searchText}
        setSearchText={getSearchInput}
        clearSearchText={clearSearchText}
      />
      <NoteContent notes={notesData} />
      {!titleState && <FlatButton onPress={naviationHandler} />}
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
