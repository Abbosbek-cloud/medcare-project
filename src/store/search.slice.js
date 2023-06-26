import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sick: [],
  selected: [],
  isLoading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIllness(state, action) {
      state.sick = action.payload;
    },
    toggleIllness(state, action) {
      const isExist = state.sick.find((item) => item.id === action.payload.id);
      if (isExist) {
        let filtered = state.sick.filter(
          (item) => item.id !== action.payload.id
        );
        state.sick = filtered;
      } else {
        state.sick = [...state.sick, action.payload];
      }
    },
    toggleSelected(state, action) {
      const isExist = state.selected.includes(action.payload);
      if (isExist) {
        let filtered = state.selected.filter((item) => item !== action.payload);
        state.selected = filtered;
      } else {
        state.selected = [...state.selected, action.payload];
      }
    },
  },
});

export const { setIllness, toggleIllness, toggleSelected } =
  searchSlice.actions;

export default searchSlice.reducer;
