import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContactsItems = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectNameFilter],
  (contactNames, filterValue) => {
    return contactNames.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
