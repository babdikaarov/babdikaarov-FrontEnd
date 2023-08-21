import { currenciesData } from "../../assets/data";
import { setCurrency } from "./currencyFilterSlice.jsx";
import { useSelector, useDispatch } from "react-redux";

export const CurrencyFilter = () => {
  const currencyFilter = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  const onClickHandler = (currency) => {
    useDispatch(() => setCurrency(currency));
  };

  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {
    return (
      <button
        className={`currency-button ${
          currencyFilter === currency && "selected"
        }`}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </button>
    );
  }
};
