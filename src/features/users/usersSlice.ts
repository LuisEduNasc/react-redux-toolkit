import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import axios from 'axios';

export interface IUser {
  id: string;
  name: string;
}

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState: IUser[] = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state: { users: IUser[] }) => state.users;

export const {} = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
