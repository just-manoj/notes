import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import NoteContent from "../UI/NoteContent";
import SearchBar from "../UI/SearchBar";
import { notes } from "../utils/constNotes";
import FlatButton from "../UI/Flatbutton";
import { storeNotes } from "../redux/NoteData";

const List = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const noteDetails = useSelector((state) => state.noteData.notes);

  const clearSearchText = () => {
    setSearchText("");
  };

  useEffect(() => {
    const storeNotesDetails = async () => {
      dispatch(storeNotes({ noteDetails: notes }));
    };
    storeNotesDetails();
  }, []);

  console.log(noteDetails);
  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        clearSearchText={clearSearchText}
      />
      <NoteContent notes={noteDetails} />
      <FlatButton />
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
