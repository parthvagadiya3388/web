import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./reducer/nameSlice";

export const store = configureStore({
     reducer: {
        name:nameReducer,
     }, 
})