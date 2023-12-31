import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const existingProduct = state.find((item) => item.product.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },
    removeFromCart(state, action) {
      const product = action.payload;
      return state.filter((cart) => cart.product.id !== product);
    },

    incrementQuantity(state, action) {
      const productId = action.payload;
      const productIndex = state.findIndex(
        (item) => item.product.id === productId
      );

      if (productIndex !== -1) {
        state[productIndex].quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const productId = action.payload;
      const productIndex = state.findIndex(
        (item) => item.product.id === productId
      );

      if (productIndex !== -1 && state[productIndex].quantity > 1) {
        state[productIndex].quantity -= 1;
      }
    },

    clearCart(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = actions;
export default reducer;
