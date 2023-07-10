import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./Greetings/greetingsSlice";

export default configureStore({
    reducer: {
        greetings: greetingsReducer,
    },
});
