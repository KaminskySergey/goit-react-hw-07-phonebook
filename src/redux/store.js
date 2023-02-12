
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Filter/filterSlice";
import { initContacts } from './Contacts/contacts.init-state';
import { initFilter } from './Filter/filter.init-state';


const initState = {
    contacts: initContacts,
    filter: initFilter,
}
console.log(initState, 'ttt')

export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

})

