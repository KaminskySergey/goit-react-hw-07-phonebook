import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getContactsThunk = createAsyncThunk('contacts', async () => {
    const {data} = await axios.get('https://63e6298883c0e85a868dde63.mockapi.io/pet/v1/contacts')
    console.log(data, 'data');
    return data;
})

// export const getContactsThunk = createAsyncThunk('contacts', async () => {
//     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=1`)
//     console.log(data.results, 'rttrtrtrtrtrt');
//     return data.results
//     })