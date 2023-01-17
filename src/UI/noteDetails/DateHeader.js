import { View, Text, StyleSheet } from "react-native";

import { dateFormat, timeFormat } from "../../utils/date";

const DateHeader = (props) => {
  const { date } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.date}> {timeFormat(date)}</Text>
      <Text style={styles.date}>{dateFormat(date)}</Text>
    </View>
  );
};

export default DateHeader;

const styles = StyleSheet.create({
  container: {
    width: "26%",
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontSize: 11,
    opacity: 0.5,
  },
});
