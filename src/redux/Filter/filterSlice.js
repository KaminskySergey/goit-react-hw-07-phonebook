import  { createSlice }  from "@reduxjs/toolkit";
import  { initFilter } from  "./filter.init-state";


const filterSlice = createSlice({
    name: 'filter',
    initialState: initFilter,
    reducers: {
        filterActions: (_, {payload}) => {
            return payload;
        }
    }
})



export const  {filterActions} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
