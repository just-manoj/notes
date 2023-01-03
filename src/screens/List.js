import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

import NoteContent from "../UI/list/NoteContent";
import SearchBar from "../UI/list/SearchBar";
import FlatButton from "../UI/button/FlatButton";
import { storeNotes } from "../redux/NoteData";
import { fetchAllNotes } from "../utils/dataBase";

const List = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [notesData, setNotesData] = useState([]);

  const clearSearchText = () => {
    setSearchText("");
  };

  useEffect(() => {
    const storeNotesDetails = async () => {
      const fetchedNotes = await fetchAllNotes();
      setNotesData(fetchedNotes);
      dispatch(storeNotes({ noteDetails: fetchedNotes }));
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
