import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => action.payload,
    clearSearchTerm: () => "",
  },
});

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
