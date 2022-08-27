import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return axios
    .get("https://covidnigeria.herokuapp.com/api")
    .then((res) => res.data);
});

const dataSlice = createSlice({
  name: "data",
  initialState: { entities: [], loading: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = [];
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.entities = action.payload.data;
    });
  },
});

export default dataSlice.reducer;
