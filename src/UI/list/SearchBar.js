import { View, StyleSheet } from "react-native";

import Title from "../../components/Title";
import Search from "../../components/Search";

const SearchBar = (props) => {
  const {
    searchText,
    setSearchText,
    clearSearchText,
    titleState,
    changeTitleHandler,
  } = props;

  return (
    <View style={styles.container}>
      {titleState ? (
        <Search
          changeTitleHandler={changeTitleHandler}
          searchText={searchText}
          setSearchText={setSearchText}
          clearSearchText={clearSearchText}
        />
      ) : (
        <Title changeTitleHandler={changeTitleHandler} />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 12,
  },
});
