import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getContactsThunk = createAsyncThunk('fetchAll', async () => {
    const {data} = await axios.get('https://63e8b493b120461c6be464c1.mockapi.io/api/v1/contacts')
    return data;
})

export const addContactsThunk = createAsyncThunk('addContact', async ({id, name, phone}) => {
    console.log(id);
    console.log(name);
    console.log(phone, '3');
    const {data} = await axios.post('https://63e8b493b120461c6be464c1.mockapi.io/api/v1/contacts', {id, name, phone})
    return data
})

export const deleteConactsThunk = createAsyncThunk('deleteConacts', async(id) => {
    const {data} = await axios.delete(`https://63e8b493b120461c6be464c1.mockapi.io/api/v1/contacts/${id}`, )
    return data;
})