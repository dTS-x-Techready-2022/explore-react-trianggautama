import { createSlice } from "@reduxjs/toolkit";

const assessmentSlice = createSlice({
  name: "contact",
  initialState: { assessment: null },
  reducers: {
    save(state, action) {
      state.assessment.push(action.payload)
    },
  },
});

export const { save } = assessmentSlice.actions;
export default assessmentSlice.reducer;