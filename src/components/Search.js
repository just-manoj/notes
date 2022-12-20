import { View, StyleSheet } from "react-native";

import InputText from "../components/InputText";
import IconButton from "../UI/button/IconButton";

const Search = (props) => {
  const { searchText, changeTitleHandler, setSearchText, clearSearchText } =
    props;

  return (
    <View style={styles.container}>
      <IconButton
        name="arrow-back"
        size={26}
        color="black"
        onPress={changeTitleHandler}
      />
      <View style={styles.full}>
        <InputText
          autoFocus={true}
          style={styles.inputText}
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <IconButton
        name="close-outline"
        size={30}
        color="black"
        onPress={clearSearchText}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    marginHorizontal: 5,
    padding: 3,
    borderBottomWidth: 1,
    borderColor: "black",
    fontSize: 18,
  },
  full: {
    flex: 1,
  },
});
