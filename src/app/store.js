import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/orders/ordersSlice";

export const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});
