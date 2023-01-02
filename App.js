import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

import Navigation from "./src/navigation/Navigation";
import { store } from "./src/redux/store";
import { initDb } from "./src/utils/dataBase";

export default function App() {
  const [dbInitiated, setDbInitiated] = useState(false);

  useEffect(() => {
    try {
      initDb();
    } catch (e) {
      console.log("error in App:", e);
    } finally {
      setDbInitiated(true);
    }
  });

  if (!dbInitiated) {
    return <AppLoading />;
  }

  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
