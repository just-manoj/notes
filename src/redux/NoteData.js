import { createSlice } from "@reduxjs/toolkit";

const NoteData = createSlice({
  name: "noteData",
  initialState: {
    notes: [],
  },
  reducers: {
    storeNotes: (state, action) => {
      action.payload.noteDetails.forEach((note) => {
        state.notes.push(note);
      });
    },
    addNewNote: (state, action) => {
      state.notes.unshift(action.payload.note);
    },
    deleteNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes.splice(index, 1);
    },
    updateNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.note.id
      );
      const oldNote = state.notes[index];
      const updatableNote = { ...oldNote, ...action.payload.note };
      state.notes.splice(index, 1);
      state.notes.splice(index, 1, updatableNote);
    },
  },
});

export const storeNotes = NoteData.actions.storeNotes;
export const addNewNote = NoteData.actions.addNewNote;
export const deleteNote = NoteData.actions.deleteNote;
export const updateNote = NoteData.actions.updateNote;

export default NoteData.reducer;
