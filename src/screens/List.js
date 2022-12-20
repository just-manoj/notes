import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import NoteContent from "../UI/list/NoteContent";
import SearchBar from "../UI/list/SearchBar";
import { notes } from "../utils/constNotes";
import FlatButton from "../UI/button/FlatButton";
import { storeNotes } from "../redux/NoteData";

const List = ({ navigation }) => {
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
      <NoteContent notes={noteDetails} />
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
