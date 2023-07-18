import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// додаємо  отриманий токен в заголовки
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk<
  {
    user: { name: string; email: string };
    token: string;
  },
  {
    name: string;
    email: string;
    password: string;
  }
>('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/signup', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error: any) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk<
  {
    user: { name: string; email: string };
    token: string;
  },
  { email: string; password: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error: any) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (error: any) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Please, login first!');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// <
//   {
//     user: {
//       name: string | null;
//       email: string | null;
//       password: string | null;
//     };
//     token: string | null;
//   },
//   string
// >
