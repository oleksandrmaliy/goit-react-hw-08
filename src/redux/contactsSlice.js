import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectFilterName } from './filtersSlice';

// const initContacts = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.items.push(action.payload);
  //   },
  //   // deleteContact(state, action) {
  //   //   const index = state.items.findIndex(
  //   //     contact => contact.id === action.payload
  //   //   );
  //   //   state.items.splice(index, 1);
  //   // },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const selectContactsItems = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

// export const selectFilteredContacts = state => {
//   const contactNames = selectContactsItems(state);
//   const filterValue = selectFilterName(state);
//   return contactNames.filter(item =>
//     item.name.toLowerCase().includes(filterValue.toLowerCase())
//   );
// };

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectFilterName],
  (contactNames, filterValue) => {
    return contactNames.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
