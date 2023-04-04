import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import CartSlice from "./CartSlice";
export const store = configureStore({
  reducer: {
    LoginSlice,
    CartSlice,
  },
});
