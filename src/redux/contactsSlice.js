import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        filters: '',
    },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
    
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.name !== action.payload);
        },

        filterContact(state, action) {
            state.filters = action.payload;
        },
    }
});

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;