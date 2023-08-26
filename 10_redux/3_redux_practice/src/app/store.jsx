import { configureStore } from "@reduxjs/toolkit";

// Import the slice reducers here.
import inventoryReducer from "../features/inventory/inventorySlice.jsx";
import cartReducer from "../features/cart/cartSlice.jsx";
import currencyFilterReducer from "../features/currencyFilter/currencyFilterSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";
// Create and export the store here.

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
    currency: currencyFilterReducer,
    search: searchTermReducer,
  },
});
