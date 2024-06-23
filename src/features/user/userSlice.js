import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Akhlaque",
    email: "akhlaqueahmad119@gmail.com",
    phone: "+91 7987557295",
    address: "New Delhi",
    userId: 1,
  },
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload.user;
      state.isLogin = true;
    },
  },
});

export const { loginAction, updateUserAction } = userSlice.actions;

export default userSlice.reducer;
