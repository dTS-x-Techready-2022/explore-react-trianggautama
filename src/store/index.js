import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./features/assessment/assessment";

export const store = configureStore({
  reducer: {
    assessment: assessmentReducer,
  }
});