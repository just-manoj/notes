import * as SQLite from "expo-sqlite";

import Notes from "./Notes";

const dataBase = SQLite.openDatabase("notesApp111.db");

export const initDb = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS notesMainTable (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                note TEXT NOT NULL,
                date DATETIME NOT NULL
            )`,
        [],
        (_, res) => {
          resolve(res);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertDataToDb = (notes) => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `
        INSERT INTO notesMainTable (title,note,date) values(?,?,?)
        `,
        [notes.title, notes.note, notes.date.toDateString()],
        (_, res) => {
          resolve(res);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const fetchAllNotes = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM notesMainTable`,
        [],
        (_, res) => {
          const notes = [];

          for (const note of res.rows._array) {
            notes.push(
              new Notes(note.id, note.title, note.note, new Date(note.date))
            );
          }

          resolve(notes);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};