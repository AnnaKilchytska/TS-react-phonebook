import { createSlice } from '@reduxjs/toolkit';

interface FilterSlice {
  value: string;
}

const initialState: FilterSlice = {
  value: '',
};

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    filterContacts(state, action) {
      state.value = action.payload;
    },
  },
});

// Генератори екшенів
export const { filterContacts } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
