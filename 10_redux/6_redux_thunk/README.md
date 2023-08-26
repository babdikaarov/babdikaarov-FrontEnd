# `createAsyncThunk()` Overview

createAsyncThunk() is a function provided by Redux Toolkit that simplifies the management of asynchronous actions and request lifecycles in Redux applications. It generates Redux action creators for handling the various stages of an asynchronous operation.

Sample Usage
javascript

```js
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);
```

## Parameters

1. type (string)
A string that will be used to generate additional Redux action type constants, representing the lifecycle of an async request. For example, a type argument of 'users/requestStatus' will generate action types like:

   - users/requestStatus/pending
   - users/requestStatus/fulfilled
   - users/requestStatus/rejected
2. payloadCreator (function)
A callback function that returns a promise containing the result of asynchronous logic. It may also return a value synchronously. If there is an error, it should either return a rejected promise with an Error instance or a plain value such as a descriptive error message. It can also return a resolved promise with thunkAPI.rejectWithValue() in case of a rejected response with a defined payload.

The payloadCreator function will be called with two arguments:

- arg: a value passed when dispatching the thunk action.

- thunkAPI: an object containing the Redux store's dispatch, getState, and additional options.

3. options (object, optional)
An object with optional fields that modify the behavior of createAsyncThunk():

   - condition: A callback that can be used to skip execution of the payload creator and action dispatches if desired.
   - dispatchConditionRejection: If condition() returns false, setting this to true will still dispatch a "rejected" action.
   - idGenerator: A function to generate a unique requestId for the request sequence.
   - serializeError: A function to customize serialization logic for error handling.
   - getPendingMeta: A function to create an object that will be merged into the pending action's meta field.

## Return Value

createAsyncThunk() returns a standard Redux thunk action creator. The action creator function has plain action creators for the pending, fulfilled, and rejected cases attached as nested fields.

## Handling Promise Lifecycle Actions

The generated thunk action creator will dispatch three action creators using the action types: pending, fulfilled, and rejected. These action creators can be used in reducers to handle the different stages of the asynchronous operation.

## Handling Thunk Results

Use .unwrap() to extract the payload of a fulfilled action or to throw the error from a rejected action. This is preferred in most cases.
Alternatively, use the unwrapResult function to achieve a similar purpose.

## Cancellation

You can use thunkAPI.signal to cancel an ongoing asynchronous operation.
Use signal.aborted to check if the thunk has been aborted.
Use signal.addEventListener('abort', callback) to handle when the thunk is aborted.

[Examples](https://redux-toolkit.js.org/api/createAsyncThunk#examples)
