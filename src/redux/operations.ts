import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact } from 'models/Contact';

// axios.defaults.baseURL = 'https://6418c9fb29e7e36438f06180.mockapi.io';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk<Contact[]>(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data: Contact, thunkAPI): Promise<any> => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, string | undefined>(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (
    credentials: {
      id: string | undefined;
      body: Contact;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.patch(
        `/contacts/${credentials.id}`,
        credentials.body
      );
      return response.data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
