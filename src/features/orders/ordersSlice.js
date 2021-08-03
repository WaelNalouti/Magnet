import { createSlice } from "@reduxjs/toolkit";

import { rows } from "../../tempData";

const initialState = {
  ordersList: rows,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    add_order: (state, action) => {
      state.ordersList = [...state.ordersList, action.payload];
    },

    //✨ need update
    update_order: (state, action) => {
      state -= 1;
    },
  },
});

export const { add_order, update_order } = orderSlice.actions;

export const selectOrders = (state) => state.orders.ordersList;

export default orderSlice.reducer;
