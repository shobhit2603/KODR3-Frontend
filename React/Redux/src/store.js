import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./redux/slice/countSlice.js";

export const store = configureStore({
    reducer: {
        counter: countReducer
    }
});