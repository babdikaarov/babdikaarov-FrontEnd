import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export default function CounterApp() {
  const count = (state) => state;
  const currentValue = useSelector(count);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Subscribed to store changes");
  }, []);

  return (
    <div>
      <h1> {currentValue} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
