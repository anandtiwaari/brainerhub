import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: [],
  reducers: {
    // AuthenticateUser(state, payload) {
    //   state.Email = payload.Email;
    //   state.password = payload.password;
    // },
    AddtoCart(state, payload) {
      state.push(payload);
    },
    RemoveFromCart(state, payload) {
      console.log(state, "check new");
      // state = state.filter((data, key) => {
      //   console.log(data, "vivi");
      // });
    },
  },
});

export const { AddtoCart, RemoveFromCart } = CartSlice.actions;
export default CartSlice.reducer;
