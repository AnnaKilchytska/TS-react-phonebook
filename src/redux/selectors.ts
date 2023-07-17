import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Contact } from '../models/Contact';

export const getContacts = (state: RootState) => state.contacts.items;
export const getFilter = (state: RootState) => state.filter.value;
export const getIsLoading = (state: RootState) => state.contacts.isLoading;
export const getError = (state: RootState) => state.contacts.error;

export const getFilteredContacts = createSelector(
  // Масив вхідних селекторів
  [getContacts, getFilter],
  // Функція перетворювач
  (contacts: Contact[], filter) => {
    // Виконуємо обчислення та повертаємо результат
    return contacts.filter(contact => {
      return contact.name?.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
