import { configureStore } from "@reduxjs/toolkit";
import {
  themeSlice,
  productsSlice,
  categoriesSlice,
  authSlice,
  dashboardData,
  salesSlice,
  notificationSlice,
} from "./slices";
const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});
export default store;
