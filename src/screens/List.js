import { useState } from "react";
import { View, StyleSheet } from "react-native";

import NoteContent from "../UI/NoteContent";
import SearchBar from "../UI/SearchBar";
import { notes } from "../utils/constNotes";

const List = () => {
  const [searchText, setSearchText] = useState("");

  const clearSearchText = () => {
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        clearSearchText={clearSearchText}
      />
      <NoteContent notes={notes} />
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
