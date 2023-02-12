import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Filter/filterSlice";
import { initContacts } from './Contacts/contacts.init-state';
import { initFilter } from './Filter/filter.init-state';


const initState = {
    contacts: initContacts,
    filter: initFilter,
}
console.log(initState, 'ttt')
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
}
const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)