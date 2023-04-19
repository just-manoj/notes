import * as SQLite from "expo-sqlite";

import Notes from "./Notes";
import { dateForExportToDB } from "./date";

const dataBase = SQLite.openDatabase("notesApp111.db");

export const initDb = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS notesMainTable (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                note TEXT NOT NULL,
                date date NOT NULL
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

export const fetchAllNotes = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM notesMainTable ORDER BY date desc`,
        [],
        (_, res) => {
          const notes = [];

          for (const note of res.rows._array) {
            notes.push(
              new Notes(
                note.id,
                note.title,
                note.note,
                dateForExportToDB(note.date)
              )
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
export const fetchOneNote = (id) => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM notesMainTable WHERE id=?`,
        [id],
        (_, res) => {
          const storeDummyNote = res.rows._array[0];
          const note = new Notes(
            storeDummyNote.id,
            storeDummyNote.title,
            storeDummyNote.note,
            dateForExportToDB(storeDummyNote.date)
          );
          resolve(note);
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
        INSERT INTO notesMainTable (title,note,date) values(?,?,datetime())
        `,
        [notes.title, notes.note],
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

export const deleteNoteInDb = (id) => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM notesMainTable WHERE id=?`,
        [id],
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

export const updateNoteInDb = (updatedNote) => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `UPDATE notesMainTable SET title=?,note=?,date=datetime() WHERE id=?`,
        [updatedNote.title, updatedNote.note, updatedNote.id],
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
