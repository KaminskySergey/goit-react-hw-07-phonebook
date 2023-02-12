import { getContactsThunk } from "./contacts.thunk";


const { createSlice } = require("@reduxjs/toolkit");
const { initContacts } = require("./contacts.init-state");

console.log(initContacts, 'init');
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initContacts,
    reducers: {
        // contactsAddActions: (state, {payload}) => {
        //     return [payload, ...state]
        // },
        
        // contactsDeleteActions: (state, {payload}) => {
        //     console.log(state)
        //     console.log(payload)
        //     return  state.filter(user => user.id !== payload)
        // }
    },
    extraReducers: {
        
        // [getContactsThunk.pending]: state => {
        //     state.isLoading = true
        // },
        // [getContactsThunk.fulfilled]: (state, {payload}) => {
        //     state.isLoading = false;
        //     state.items = payload; 
        // },
        // [getContactsThunk.rejected]: (state, {error}) => {
        //     state.error = error.message;
        //     state.isLoading = false
        // },
        

    }
    
})

export const {contactsAddActions, contactsDeleteActions} = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer;
