import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        filterItem(state, action) {
            return action.payload;
        },
    }
});

export const { filterItem } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;