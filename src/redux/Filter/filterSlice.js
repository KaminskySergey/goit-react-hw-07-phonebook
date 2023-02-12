import  { createSlice }  from "@reduxjs/toolkit";
import  { initFilter } from  "./filter.init-state";


const filterSlice = createSlice({
    name: 'filter',
    initialState: initFilter,
    reducers: {
        filterActions: (state, {payload}) => {
            state.filter = payload;
        }
    }
})



export const  {filterActions} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
