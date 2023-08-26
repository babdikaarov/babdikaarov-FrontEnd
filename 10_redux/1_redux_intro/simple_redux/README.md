# simple redux

## Step 1

```bash
npm i @reduxjs/toolkit react-redux
```

## Step 2

`Create Store`
Set up store using configureStore to produce global store object which will register reducer

```js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from 'counterSlice'

export const store = configureStore({
  reducer: counterReducer,
});
```

## Step 3

`Provide Store`
it will make acceable to entire tree component to global store object

```js
// App.js
import { Provider } from "react-redux";
import { store } from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <CounterApp />;
    </Provider>
  );
}
```

## Step 4

`Create a slice`
A slice is a collection of data with unique name and reducers function.

Redux Toolkit’s `createSlice()` function uses a library called Immer inside of it which helps to avoid mistakes of rule immutable changes. in a simple way u can use any mutable method on reducers.

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

/* Object returned by counterSlice */
 {
  name: 'counter',
  reducer: (state, action) => newState,
  actions: {
    increment: (payload) => ({type: 'counter/increment', payload}),
    decrement: (payload) => ({type: 'counter/decrement', payload})
  }
 }

```

```js
// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

/* When you import and use this slice in your Redux store configuration, you should name the imported reducer function as counterReducer to match the variable name you're using in the configureStore function: */

// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer; 

// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Here, you're using the reducer function from the counterSlice

const store = configureStore({
  reducer: {
    counter: counterReducer, // Here, you're using counterReducer as the reducer for the "counter" slice
  },
});
```

## Step 5

`Select state and dispatch it`
`useSelector()` will get us a current state, `useDispatch()` will let us dispatch actions(name of the function) and payload(data passed to modify state)

```js
// Counter.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux";

export default function CounterApp() {
  const counter = (state) => state;
  const currentValue = useSelector(counter);
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
```
