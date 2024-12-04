
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item to the cart
      }
    },
    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update quantity if item is found
      }
    },
  },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer for use in store.js
export default cartSlice.reducer;
