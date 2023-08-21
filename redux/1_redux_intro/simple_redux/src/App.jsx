import "./App.css";
import CounterApp from "./counter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

export default App;
