const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.legacy_createStore;

const intialState = {
  name: "Nitin",
  address: {
    street: "177/A Civil line",
    city: "Balrampur",
    state: "Uttar Pradesh",
  },
};
const STREET_UPDATE = "STREE_UPDATE";

const updateStreet = (street) => {
  return { type: STREET_UPDATE, payload: street };
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State ", store.getState())
);
store.dispatch(updateStreet("Civil line, t.v tower"));
unsubscribe();
