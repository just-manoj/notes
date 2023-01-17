import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

import Navigation from "./src/navigation/Navigation";
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
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Navigation />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
