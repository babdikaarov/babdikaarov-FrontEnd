# Redux fundamentals `legacy method of use`

## `Slice`  `old way`

Slice is a property of state in redux application and all together properites named as slices.

```js
/* 
The application has the following three slices:
- allRecipes: an array of all recipe objects
- favoriteRecipes: an array of recipe objects chosen by the user from state.allRecipes
- searchTerm: a string that filters which recipes are displayed */
state = {
  allRecipes: [
    {id: 0, name: 'Jjampong', img: 'img/jjampong.png' },
    {id: 2, name: 'Cheeseburger', img: 'img/cheeseburger.png' },
    //… more recipes omitted
  ],
  favoriteRecipes: [
    {id: 1, name: 'Doro Wat', img: 'img/doro-wat.png' },
  ],
  searchTerm: 'Doro'
};

```

## `Actions` and `Payloads`  `old way`

`Actions`:
An action is a plain JavaScript object that represents an intention to change the state of your application. It describes what kind of change is happening and often includes additional information (payload) related to that change. Actions are dispatched to the Redux store, and reducers use these actions to determine how the state should be updated.

An action typically has two properties:

- type: A string that describes the type of action being performed. It's usually written in uppercase and often referred to as the "action type".
- payload: Optional data that provides more context or information about the action. The payload can be of any type, such as numbers, strings, objects, or arrays.

`Payloads`:
A payload is the data that accompanies an action. It's the additional information that helps the reducer understand what specific changes need to be made to the state. The payload is not mandatory, and not all actions require a payload. It depends on the context and the kind of action being dispatched.

```js
import allRecipesData from './data.js';

const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ''
};

const setSearchTerm = (term) => {type: 'searchTerm/setSearchTerm', payload: term }
const clearSearchTerm = () => {type: 'searchTerm/clearSearchTerm'}
const loadData = () => {type: 'allRecipes/loadData', payload: allRecipesData}
const addRecipe = (recipe) => {type: 'favoriteRecipes/addRecipe', payload: recipe}
const removeRecipe = (recipe) => {type: 'favoriteRecipes/removeRecipe', payload: recipe}

```

## `Reducers`

Immutable Updates

```js
const recipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return { 
        ...state,
        allRecipes: action.payload
      }
    case 'searchTerm/clearSearchTerm':
      return {
        ...state,
        searchTerm: ''
      }
    
    case 'searchTerm/setSearchTerm':
      return {
        ...state,
        searchTerm: action.payload
      }

    case 'favoriteRecipes/addRecipe':
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload]
      }

    case 'favoriteRecipes/removeRecipe':
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter( el => 
          el.id !== action.payload.id
        )
      }

    default:
      return state;
  }
};
```

## Reducer Composition `old way`

Single reducer which handles the states is no good practice and here comes composition, each slices handled by seperate reducer.
One major advantage of this approach is that each slice reducer only receives its slice of the entire application’s state. Therefore, each slice reducer only needs to immutably update its own slice and doesn’t care about the others. This removes the problem of copying potentially deeply nested state objects.

```js
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default: 
      return searchTerm;
  }
}

const initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch(action.type) {
    case 'favoriteRecipes/addRecipe':
      return  [...favoriteRecipes, action.payload]
    case 'favoriteRecipes/removeRecipe':
      return favoriteRecipes.filter(element => element.id !== action.payload.id)
    default:
      return favoriteRecipes

  }
}


const rootReducer = (state = {}, action) => {
  const nextState = {
    allRecipes: allRecipesReducer(state.allRecipes, action),
    searchTerm: searchTermReducer(state.searchTerm, action),
    favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action) 
  } 
  return nextState;
}
```

## Combine Reducers `old way`

In the reducer composition pattern, the same steps are taken by the rootReducer for each slice reducer:

call the slice reducer with its slice of the state and the action as arguments
store the returned slice of state in a new object that is ultimately returned by the rootReducer().

```js
import { createStore } from 'redux';
 
// todosReducer and filterReducer omitted
 
const rootReducer = (state = {}, action) => {
  const nextState = {
    allRecipes: allRecipesReducer(state.allRecipes, action),
    searchTerm: searchTermReducer(state.searchTerm, action),
    favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action) 
  } 
  return nextState;
}
 
const store = createStore(rootReducer);
 
```

The Redux package helps facilitate this pattern by providing a utility function called combineReducers() which handles this boilerplate for us:

```js
import { createStore, combineReducers } from 'redux'
 
// todosReducer and filterReducer omitted.
 
const reducers = {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer
  };
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
```

Let’s break this code down:

The reducers object contains the slice reducers for the application. The keys of the object correspond to the name of the slice being managed by the reducer value.
The combineReducers() function accepts this reducers object and returns a rootReducer function.
The returned rootReducer is passed to createStore() to create a store object.
Just as before, when an action is dispatched to the store, the rootReducer() is executed which then calls each slice reducer, passing along the action and the appropriate slice of state.

The last 6 lines of this example can be rewritten inline:

```js
const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer
}));
 
```

Take a look at store.js where you will find the slice reducers that you created in the last exercise. Now, however, the rootReducer() is missing. Rather than creating this function by hand, you will use combineReducers().

## Passing Store Data Through the Top-Level React Component `old way`

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store.js';
import { App } from './app/App.js';
// Import 'store' here.


const render = () => {
  // Pass `state` and `dispatch` props to <App />
  
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}
render();
// Subscribe render to changes to the `store`
store.subscribe(render)
```

## Using Store Data Within Feature Components `olds way`

```js
import React from 'react';

import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';
// Import the FavoriteRecipes component here.

export function App(props) {
  const {state, dispatch} = props;

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  // Render the <FavoriteRecipes /> component.
  // Pass `dispatch` and `favoriteRecipes` props.
  return (
    <main>
      <section>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes 
          favoriteRecipes={visibleFavoriteRecipes} 
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes
          allRecipes={visibleAllRecipes} 
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
```

Implementing the Redux Store from Scratch
An article on how to implement the Redux store object using vanilla JavaScript.

Who is this article for?
Though the redux package provides the createStore() method for us, examining how this powerful object can be created using vanilla JavaScript will help illuminate how Redux works under the hood. This article is for learners who want to solidify their understanding of the Redux store.

It is assumed that you have some familiarity with the following Redux-related terms and concepts:

The one-way data-flow model (state → view → actions → state)
Reducer functions
Action objects
The createStore() function (by the redux package)
The store object and its three main methods
Visit our course on Redux to learn about or refresh yourself with these terms and concepts.

Part 1: What is the Redux store and how is it used?
Redux is a state-management library centered around a single, powerful object called the store. This one object is responsible for holding the entire application’s state, receiving action objects and then executing state changes based on the type of the action received, and informing (executing) listener functions when such changes occur.

To help create this store object, the Redux library provides the createStore() function. This function accepts a reducer function as an argument and returns a store object with three essential methods:

store.getState(): for retrieving the current state value held by the store
store.dispatch(action): for triggering changes to the state, given an action object
store.subscribe(listener): for registering listener functions to be called when state changes occur
All of this can be seen in the example below which implements a simple counting application:

import { createStore } from 'redux';

const countReducer = (state = 0, action) => {
  switch (action.type) {  
    case 'increment':  
      return state + 1;
    case 'decrement':  
      return state - 1;
    default:  
      return state;  
  }
}
const store = createStore(countReducer);

const render = () => {
  document.getElementById('count').text = store.getState(); // Display the current state.
}
render(); // Render once with the initial state of 0.

store.subscribe(render); // Re-render on state changes.

document.getElementById('plusButton').addEventListener('click', () => {  
  store.dispatch({ type: 'increment' }); // Request a state change.
});

With this working knowledge of how to use the createStore() function and the store methods, we can begin to write the outline of this function:

const createStore = (reducer) => {
  const getState = () => {};
  const dispatch = () => {};
  const subscribe = () => {};
  return { getState, dispatch, subscribe };
}

Above, we define createStore() simply as a function with a reducer argument that returns an object containing three methods: getState(), dispatch(), and subscribe().

Part 2: Holding the current state of the application
Let’s now turn our attention to the primary responsibility of the store: to hold the current state of the application and to provide access to this value via the store.getState() method. Implementing this behavior is as simple as storing an encapsulated variable (we can call it state) within the function and returning it with store.getState():

const createStore = (reducer) => {
  let state;
  const getState = () => state;
  const dispatch = () => {};
  const subscribe = () => {};
  return { getState, dispatch, subscribe };
}

Hiding the state behind the API of the store avoids common dangers associated with having global variables:

Polluting the global namespace increases the chances of naming collisions.
Granting variable access to parts of an application while limiting it to others is impossible.
Debugging is difficult when a variable is referenced in many parts of the application.
Redux solves these problems by requiring the programmer to use only the store methods to access the state.

Part 3: Managing listener functions
The state of the store will likely change many times and the features of the application must be notified when those changes occur. The store.subscribe() method allows you to subscribe callback functions, called listeners, to be executed when the state data changes. As in the first example, functions that render the view-layer are often subscribed to the store and use store.getState() to get the most up-to-date state data.

Any number of listeners may be subscribed to the store at once so an array is maintained by the store and the subscribe() method adds provided listeners to that array.

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = () => {};

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {  
      listeners = listeners.filter(l => l !== listener)  
    }
  };

  return { getState, dispatch, subscribe };
}

Also notice that the subscribe() method returns a function. If you no longer want the given listener to be executed in response to state changes, this function can be saved and called to unsubscribe the given listener. For example:

const unsubscribe = store.subscribe(render); // Subscribes `render` to the store.

// somewhere else in the program...
unsubscribe(); // Unsubscribes `render` from the store.

Part 4: Handling incoming actions
Redux ensures that the state is maintained reliably by requiring the programmer to dispatch actions to the store if they wish to update the state. The store.dispatch() function accepts an action object as an argument and calculates the next state value by calling the reducer() with the current state and the action:

const createStore = (reducer) => {
  let state;
  let listeners = [];
  
  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {  
      listeners = listeners.filter(l => l !== listener)  
    }
  };
  
  dispatch({});
  return { getState, dispatch, subscribe };
}

Each listener that has been subscribed to the store (stored in the listeners array) is then executed. Notice that the state is not passed directly to these listeners. It is up to each listener to use store.getState() to get the most up-to-date data.

Finally, notice that before the store object is returned, the function call dispatch({}) is made. This initializes the state value with the default initial state value of the reducer.

Apart from a few details and edge cases, this is the full implementation of the createStore() method provided by the redux package. As you can see, the technology behind the Redux store is not particularly complicated, though the pattern it enforces is incredibly powerful.
