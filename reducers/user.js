
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: { token: null, firstname: null, username: null },
};

export const usersSlice = createSlice({
 name: 'user',
  initialState,
 reducers: {
    login: (state, action) => {
     state.value.token = action.payload.token;
     state.value.username = action.payload.username;
     state.value.firstname = action.payload.firstname;
   },
    logout: (state, action) => {
     state.value.token = null;
     state.value.username = null;
     state.value.firstname = null;
    }
 },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;  