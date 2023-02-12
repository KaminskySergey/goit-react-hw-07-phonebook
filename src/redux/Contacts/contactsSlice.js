import { getContactsThunk, addContactsThunk, deleteConactsThunk } from "./contacts.thunk";


import { createSlice } from "@reduxjs/toolkit";
import { initContacts } from "./contacts.init-state";


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
    extraReducers: builder =>  {
        builder.addCase(getContactsThunk.pending, state => {
            state.isLoading = true;
        })
        // [getContactsThunk.pending]: state => {
        //     state.isLoading = true;
        // },

        .addCase(getContactsThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload
        })
        // [getContactsThunk.fulfilled]: (state, {payload}) => {
        //     state.isLoading = false;
        //     state.items = payload
            
        // },

        .addCase(getContactsThunk.rejected, (state, {payload}) => {
            state.isLoading = true;
            
        })
        // [getContactsThunk.rejected]: (state, {payload}) => {
        //     state.isLoading = false;
        //     state.error = null
        // },
        //===========================
        .addCase(addContactsThunk.pending, state => {
            state.isLoading = true
        })
        // [addContactsThunk.pending]: state => {
        //     state.isLoading = true
        // },
        .addCase(addContactsThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.items = [payload, ...state.items]
        })
        // [addContactsThunk.fulfilled]: (state, {payload}) => {
        //     state.isLoading = false
        //     state.items = [payload, ...state.items]
        // },
        .addCase(addContactsThunk.rejected, state => {
            state.isLoading = false
            state.error = null
        })
        // [addContactsThunk.rejected]: state => {
        //     state.isLoading = false
        //     state.error = null
        // },
        //========================
        .addCase(deleteConactsThunk.pending, state => {
            state.isLoading = true
        })
        // [deleteConactsThunk.pending]: state => {
        //     state.isLoading = true
        // },
        .addCase(deleteConactsThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.items = state.items.filter(user => user.id !== payload.id)
        })
        // [deleteConactsThunk.fulfilled]: (state, {payload}) => {
        //     state.isLoading = false
        //     state.items = state.items.filter(user => user.id !== payload.id)
        // },
        .addCase(deleteConactsThunk.rejected, state => {
            state.isLoading = false
            state.error = null;
        })
        // [deleteConactsThunk.rejected]: state => {
        //     state.isLoading = false
        //     state.error = null;
        // }



    }
    
})

// export const {contactsAddActions, contactsDeleteActions} = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer;
