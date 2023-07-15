import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { RootState } from './store';

import { logOut } from './auth/operations';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { Contact } from 'types/Contact';

interface ContactState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: ContactState) => {
  // return {
  //   ...state,
  //   isLoading: true,
  // };

  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: ContactState,
  action: PayloadAction<any>
): void => {
  // return {
  //   ...state,
  //   isLoading: false,
  //   error: action.payload,
  // };

  state.isLoading = false;
  if (action.payload !== undefined) {
    state.error = action.payload;
  }
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(
        fetchContacts.fulfilled,
        (
          state: ContactState,
          action: {
            payload: any;
            type: string;
          }
        ) => {
          return {
            ...state,
            isLoading: false,
            error: null,
            items: [
              ...action.payload.sort(
                (a: { id: number }, b: { id: number }): number => b.id - a.id
              ),
            ],
          };
        }
      )
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [action.payload, ...state.items],
        };
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const current = state.items.find(item => item.id === action.payload.id);
        current!.name = action.payload.name
          ? action.payload.name
          : current!.name;
        current!.number = action.payload.number
          ? action.payload.number
          : current!.number;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
