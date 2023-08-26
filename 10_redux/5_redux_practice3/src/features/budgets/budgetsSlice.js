import pkg from "@reduxjs/toolkit";
const { createSlice } = pkg;

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];

const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const { category, amount } = action.payload;
      const budgetToUpdate = state.find(
        (budget) => budget.category === category
      );
      if (budgetToUpdate) {
        budgetToUpdate.amount = amount;
      }
    },
  },
});

console.log(budgetsSlice);
console.log(budgetsSlice);
console.log("heelpp");

export const { editBudget } = budgetsSlice.actions;
export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;
