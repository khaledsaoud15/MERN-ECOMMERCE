import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deletFromCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      state.quantity -= 1;
      state.total -=
        state.products[index].price * state.products[index].quantity;
      state.products.splice(index, 1);
    },
  },
});

export const { addProduct, deletFromCart } = cartSlice.actions;
export default cartSlice.reducer;
