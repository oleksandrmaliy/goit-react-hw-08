import { createSelector } from '@reduxjs/toolkit';
import { selectFilterName } from '../filters/selectors';

export const selectContactsItems = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectFilterName],
  (contactNames, filterValue) => {
    return contactNames.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
