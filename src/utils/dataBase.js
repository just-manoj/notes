import * as SQLite from "expo-sqlite";

const dataBase = SQLite.openDatabase("notesApp111.db");

export const initDb = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS notesMainTable (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                date DATETIME NOT NULL
            )`,
        [],
        (_, res) => {
          console.log("corect", res);
          resolve(res);
        },
        (_, error) => {
          console.log("error", error);
          reject(error);
        }
      );
    });
  });
  return promise;
};
