const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;
const combineReducer = redux.combineReducers;

//logger middleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action
// {
//   type: BUY_CAKE,
//   info: "First redux action",
// };

//action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// state will be represent in a single object 1st principle
// const initialState = {
//   numOfCakes: 10,
// };

const initialCakeState = { numOfCakes: 10 };
const initialIceCreamState = { numOfIceCream: 20 };

//reducer function; (prevState,action)=>newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

// creating redux store; to store application state by passing reducer function that hold intial state;
//required for store to make state transiton based on action

//combine multiple reducer into a single reducer and pass it to store
const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());
//subscribing the changes to store
const unsubscribe = store.subscribe(() => {});

//dispatching action;using action creators
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// when actions dispatched both reducer recive action one ignore & other execute.

// dispatching action;for buying icecream
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
//unsubscribng store subscription
unsubscribe();
