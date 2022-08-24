import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const data = await fetch("https://covidnigeria.herokuapp.com/api").then(
    (res) => res.json()
  );
  console.log("data---------", data);
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    response: {
      status: null,
      message: null,
    },
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.response.status = "loading";
    },

    [fetchData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.response.status = "success";
    },
    [fetchData.rejected]: (state, { payload }) => {
      state.response.reducersstatus = "failed";
    },
  },
});

export default dataSlice.reducer;
