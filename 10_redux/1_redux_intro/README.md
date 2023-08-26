# Intro to redux

## One-Way Data Flow

In most applications, there are three parts:

- State – the current data used in the app
- View – the user interface displayed to users
- Actions – events that a user can take to change the state
The flow of information would go like this:

- The state holds the current data used by the app’s components.
- The view components display that state data.
- When a user interacts with the view, like clicking a button, the state will be updated in some way.
- The view is updated to display the new state.
With plain React, these three parts overlap quite a bit. Components not only render the user interface, but they also may manage their own state. When actions that may change the state occur, components need to directly communicate these changes to each other.

Redux helps separate the state, the view, and actions by requiring that the state be managed by a single source. Requests to change the state are sent to this single source by view components in the form of an action. Any components of the view that would be affected by these changes are informed by this single source. By imposing this structure, Redux makes our code more readable, reliable, and maintainable.

### State

State is the current information behind a web application.

For a calendar application it includes the events (name, date, label, etc.), the current timezone, and the display filters. For a todo app it includes the todo items (description, completed/not completed), the current order of the items, and display filters. For a word editor, it includes the contents of the document, the print settings, and comments.

With Redux, state can be any JavaScript type, including: number, string, boolean, array, and object.

```js
const state = [
  'Take Five',
  'Claire de Lune',
  'Respect'
];
```

### Actions

Most well-designed applications will have separate components that need to communicate and share data with each other.

A todo list might have an input field where the user can type in a new todo item. The application might transfer this data from the input field, add it to an array of all todos, and then render them as text on the screen. This entire interaction can be defined as an action. In Redux, actions are represented as plain JS objects.

```js
const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};

const removeAll = {
  type: 'songs/removeAll'
};
```

- Every action must have a type property with a string value. This describes the action.
- Typically, an action has a payload property with an object value. This includes any information related to the action. In this case, the payload is the todo text.
- When an action is generated and notifies other parts of the application, we say that the action is dispatched.

### Reducers

So far, we’ve defined the state of our application and the actions representing requests to change that state, but we haven’t seen how these changes are carried out in JavaScript. The answer is a `reducer`.

A reducer, or reducer function, is a plain JavaScript function that defines how the current state and an action are used in combination to create the new state.

```js

const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};

const removeAll = {
  type: 'songs/removeAll'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'songs/addSong': {
      return [
        ...state,
        action.payload
      ]
    }
    case 'songs/removeSong': {
      return state.filter(el => el !== action.payload);
      
    }
    default: {
      return state;
      }
  }
};
```

There are a few things about this `reducer` that are true for all reducers:

- It’s a plain JavaScript function
- It defines the application’s next state given a current state and a specific action
- It returns a default initial state if no action is provided
- It returns the current state if the action is not recognized

### Rules of Reducers

- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic or other "side effects"

[redux documentation](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#rules-of-reducers)

By asynchronous logic or `side effects`, we mean anything that the function does aside from returning a value, e.g. logging to the console, saving a file, setting a timer, making an HTTP request, generating random numbers.
`side effect` it is observable change in the state of program, a pure function would be in this case which has no `side effects`.

```js
const globalSong = 'We are the World';

const playlistReducer = (state = [], action) => {
 switch (action.type) {
   case 'songs/addGlobalSong': {
     return [...state, action.payload];
   }
   default:
     return state;
 }
}
 
// Example call to reducer
const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];
const addAction = { type: 'songs/addGlobalSong', payload: 'We are the World' };
const newState = playlistReducer(state, addAction);
```

### Immutable Updates and Pure Functions

In programming, there is a more general way to describe the three rules of reducers in Redux: reducers must make immutable updates and be pure functions.

If a function makes immutable updates to its arguments, it does not change the argument but instead makes a copy and changes that copy. (Sounds similar to rule 2, no?) It’s called updating immutably because the function doesn’t change, or mutate, the arguments.

```js
// This function mutates its argument:

const mutableUpdater = (obj) => {
  obj.completed = !obj.completed;
  return obj;
}
 
const task = { text: 'do dishes', completed: false };
const updatedTask = mutableUpdater(task);
console.log(updatedTask); 
// Prints { text: 'do dishes', completed: true };
 
console.log(task); 
// Prints { text: 'do dishes', completed: true };

/* =========================================== */

// Meanwhile, this function “immutably updates” its argument:

const immutableUpdater = (obj) => {
  return {
    ...obj,
    completed: !obj.completed
  }
}
 
const task = { text: 'iron clothes', completed: false };
const updatedTask = immutableUpdater(task);
console.log(updatedTask); 
// Prints { text: 'iron clothes', completed: true };
 
console.log(task); 
// Prints { text: 'iron clothes', completed: false };

/* =========================================== */

// Note that, plain strings, numbers, and booleans are immutable in JavaScript so we can just return them without making a copy:

const immutator = (num) => num + 1;
const x = 5;
const updatedX = immutator(x);
 
console.log(x, updatedX); // Prints 5, 6
 
```

This is a combination of rules 1 and 3:

Reducers should only calculate the new state value based on the state and action arguments.
Reducers must not do any asynchronous logic or other “side effects”.

```js
// In this example, the function is not a pure function because its returned value depends on the status of a remote endpoint.

const addItemToList = (list) => {
  let item;
  fetch('https://anything.com/endpoint')
    .then(response => {
      if (!response.ok) {
        item = {};
      }
      
      item = response.json();
   });
 
   return [...list, item];  
};
 
/* =============================== */ 

// The function can be made pure by pulling the fetch() statement outside of the function.

let item;
  fetch('https://anything.com/endpoint')
    .then(response => {
      if (!response.ok) {
        item = {};
      }
      
      item = response.json();
   });
 
const addItemToList = (list, item) => {
    return [...list, item];
};
 
```

### Store

So far we have covered state, actions, reducers, and how they participate in the one-way data flow. Where, in JavaScript, does all of this take place?

Redux uses a special object called the store. The store acts as a container for state, it provides a way to dispatch actions, and it calls the reducer when actions are dispatched. In nearly every Redux application, there will only be one store.

We can rephrase our data flow using the new term:

- The store initializes the state with a default value.
- The view displays that state.
- When a user interacts with the view, like clicking a button, an action is dispatched to the store.
- The dispatched action and the current state are combined in the store’s reducer to determine the next state.
- The view is updated to display the new state.

### Review

Congratulations! In this lesson you’ve built a strong conceptual foundation of Redux and built a state object, some actions, and a reducer along the way. Here’s what else you learned:

Redux is a library for managing and updating application state based on the Flux architecture

Redux makes code more predictable, testable, and maintainable by consolidating state in a single object. Components are just given data to render and can request changes using events called actions.

In a Redux application, data flows in one direction: from state to view to action back to state and so on.

State is the current information behind a web application.

An action is an object describing an event in the application. It must have a type property and it typically has a payload property as well.

A reducer is a function that determines the application’s next state given a current state and a specific action. It returns a default initial state if none is provided and returns the current state if the action is not recognized

A reducer must follow these three rules:

They should only calculate the new state value based on the existing state and action.
They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
They must not do any asynchronous logic or other “side effects”.
In other words, a reducer must be a pure function and it must update the state immutably.

The store is a container for state, it provides a way to dispatch actions, and it calls the reducer when actions are dispatched. Typically there is only one store in a Redux application.
