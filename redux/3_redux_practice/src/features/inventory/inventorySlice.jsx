import { createSlice } from "@reduxjs/toolkit";
import { inventoryData } from "../../assets/data";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: [],
  reducers: {
    loadData: () => inventoryData,
  },
});

export const { loadData } = inventorySlice.actions;
export default inventorySlice.reducer;

// import { inventoryData } from "../../assets/data";

// export const loadData = (data) => {
//   return {
//     type: "inventory/loadData",
//     payload: inventoryData,
//   };
// };

// const initialInventory = [];
// export const inventoryReducer = (inventory = initialInventory, action) => {
//   switch (action.type) {
//     case "inventory/loadData": {
//       return action.payload;
//     }
//     default: {
//       return inventory;
//     }
//   }
// };
