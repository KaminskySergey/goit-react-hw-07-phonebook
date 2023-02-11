const { configureStore } = require("@reduxjs/toolkit");

const initState = {
    contacts: [],
    filter: ''
}

export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: {

    }
})