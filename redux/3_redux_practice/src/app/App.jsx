import { Cart } from "../features/cart/Cart.jsx";
import { Inventory } from "../features/inventory/Inventory.jsx";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.jsx";
import { SearchTerm } from "../features/searchTerm/SearchTerm.jsx";
import { Provider } from "react-redux";
import { store } from "./store.jsx";
// Import the Cart component here.

// Render the Cart component below <Inventory />
export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SearchTerm />
        <CurrencyFilter store={store} />
        <Inventory />
        <Cart />
      </div>
    </Provider>
  );
};

// function getFilteredItems(items, searchTerm) {
//   return items.filter((items) =>
//     items.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// }
