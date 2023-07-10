import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "/api/v1/greetings";

const initialState = {
    greetings: '',
    isLoading: true,
    error: undefined,
};

export const fetchGreetings = createAsyncThunk(
    "greetings/fetchGreetings",
    async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
);

const greetingsSlice = createSlice({
    name: "greetings",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGreetings.pending]: (state, action) => {
            state.isLoading = true;
        }
        ,
        [fetchGreetings.fulfilled]: (state, action) => {
            state.greetings = action.payload;
            state.isLoading = false;
        }
    }
});

e
export default greetingsSlice.reducer;