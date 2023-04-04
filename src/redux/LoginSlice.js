import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState: {
    Email: "admin@gmail.com",
    password: "Abcd@1234",
    Isslogged: false,
  },
  reducers: {
    AuthenticateUser(state, payload) {
      state.Email = payload.Email;
      state.password = payload.password;
    },
    isLogged(state, payload) {
      if (state.Isslogged) {
        state.Isslogged = false;
      } else {
        state.Isslogged = true;
      }
    },
  },
});

export const { AuthenticateUser, isLogged } = LoginSlice.actions;
export default LoginSlice.reducer;
