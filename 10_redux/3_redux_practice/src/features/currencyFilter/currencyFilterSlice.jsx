const initialCurrencyFilter = "USD";
import { createSlice } from "@reduxjs/toolkit";

const currencyFilterSlice = createSlice({
  name: "currencyFilter",
  initialState: initialCurrencyFilter,
  reducers: {
    setCurrency: (state, action) => action.payload,
  },
});

export const { setCurrency } = currencyFilterSlice.actions;
export default currencyFilterSlice.reducer;

// export const currencyFilterReducer = (
//   currencyFilter = initialCurrencyFilter,
//   action
// ) => {
//   switch (action.type) {
//     case "currencyFilter/setCurrency": {
//       return action.payload;
//     }
//     default: {
//       return currencyFilter;
//     }
//   }
// };

// export const setCurrency = (currency) => {
//   return {
//     type: "currencyFilter/setCurrency",
//     payload: currency,
//   };
// };
