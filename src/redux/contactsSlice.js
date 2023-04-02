import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        filters: '',
    },
    reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             // state = action.payload;
    //             state.items.push(action.payload);
    //         },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                     name,
    //                     number,
    //                     id: nanoid(),
    //                 },
    //             };
    //         },
    //     },


        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        filterContact(state, action) {
            state.filters = action.payload;
        },
    }
});

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;