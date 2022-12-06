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
  },
});

export const storeNotes = NoteData.actions.storeNotes;

export default NoteData.reducer;
