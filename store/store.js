import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./slices";
const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});
export default store;
