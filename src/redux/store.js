import { configureStore } from "@reduxjs/toolkit";

import NoteData from "./NoteData";

export const store = configureStore({
  reducer: {
    noteData: NoteData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
