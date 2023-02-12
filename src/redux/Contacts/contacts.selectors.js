import { createSelector } from "@reduxjs/toolkit";
import { selectedFilter } from "redux/Filter/filter.selectors";

export const selectedContacts = state => state.contacts.items;
export const selectedIsLoading = state => state.contacts.isLoading;
export const selectedError = state => state.contacts.error;

export const selectedSearchInput = createSelector([selectedContacts, selectedFilter], (contacts, filter) => {
    return contacts.filter((contact) => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))
})