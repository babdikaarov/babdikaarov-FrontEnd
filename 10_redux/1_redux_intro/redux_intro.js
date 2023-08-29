const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const wagonReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case "travel": {
      if (state.supplies > 20 * action.payload) {
        return {
          ...state,
          supplies: state.supplies - 20 * action.payload,
          distance: state.distance + 10 * action.payload,
          days: state.days + action.payload,
        };
      } else {
        return state;
      }
    }

    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    case "sell": {
      return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5,
      };
    }

    case "buy": {
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15,
      };
    }
    case "theft": {
      return {
        ...state,
        cash: state.cash / 2,
      };
    }
    default:
      return state;
  }
};

function actionParam(type, payload) {
  return {
    type,
    payload,
  };
}

let wagon = wagonReducer(undefined, {});
console.log(wagon);
wagon = wagonReducer(wagon, actionParam("travel", 1));
console.log(wagon);
wagon = wagonReducer(wagon, actionParam("gather"));
console.log(wagon);
wagon = wagonReducer(wagon, actionParam("tippedWagon"));
console.log(wagon);
wagon = wagonReducer(wagon, actionParam("travel", 3));
console.log(wagon);
wagon = wagonReducer(wagon, actionParam("travel", 3));
console.log(wagon);