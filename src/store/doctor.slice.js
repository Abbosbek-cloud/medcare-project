import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDoctors } from "./requests";

const initialState = {
  isLoading: false,
  doctors: null,
  error: "",
};

export const GetAllDoctorsThunk = createAsyncThunk(
  // mana shu string ichidagi qiymatlar unique (takrorlanmas) bo'lishi kerak
  "doctors/getAll",
  getAllDoctors
);

export const GetOneDoctorsThunk = createAsyncThunk(
  // mana shu string ichidagi qiymatlar unique (takrorlanmas) bo'lishi kerak
  "doctors/getAll",
  getAllDoctors
);

export const doctorSlice = createSlice({
  name: "doctor",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    // bitta thunk ichida ikkita phase (pending, fulfilled, rejected) yozilmasligi kerak
    builder.addCase(GetAllDoctorsThunk.pending, function (state, action) {
      state.isLoading = true;
    });
    builder.addCase(GetAllDoctorsThunk.fulfilled, function (state, action) {
      state.isLoading = false;
      console.log(action.payload);
      state.doctors = action.payload;
    });
    builder.addCase(GetAllDoctorsThunk.rejected, function (state, action) {
      state.isLoading = false;
    });
  },
});

export const {} = doctorSlice.actions;

export default doctorSlice.reducer;
