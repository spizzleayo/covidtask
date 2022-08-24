import { configureStore } from "@reduxjs/toolkit";
import reducer from "./dataSlice";

const store = configureStore({
  reducer: {
    data: reducer,
  },
});

export default store;
