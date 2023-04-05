import { createSlice } from '@reduxjs/toolkit';
import data from "../data/data.json"
const initialState = {
  users: data.users ,
};


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    // editUser: (state, action) => {
    //   const { id, firstName, lastName, age, email, address } = action.payload;
    //   const index = state.users.findIndex((user) => user.id === id);
    //   if (index !== -1) {
    //     state.users[index] = { id, firstName, lastName, age, email, address };
    //   }
    // },
    updateUser: (state, action) => {
      const { id, firstName, lastName, age, email, address } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { id, firstName, lastName, age, email, address };
      }
    },
  },
});

export const { addUser, deleteUser, editUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
