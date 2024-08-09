import { createStore } from "redux";

const carsInitialValue = [
  {
    id: 1,
    name: "toyota",
    quantity: 10,
  },
  {
    id: 2,
    name: "nissan",
    quantity: 10,
  },
  {
    id: 3,
    name: "ford",
    quantity: 10,
  },
];

const carsReducer = (state = carsInitialValue, { type, payload }) => {
  switch (type) {
    case "SELL":
      return state.map((car) => {
        if (car.id === payload) {
          return {
            ...car,
            quantity: car.quantity - 1,
          };
        } else {
          return car;
        }
      });

    default:
      return state;
  }
};

const store = createStore(carsReducer, carsInitialValue);
export default store;

// const createMyStore = (reducer, preloadedState = {}, enhancer = undefined) => {
//   if (enhancer) {
//     // return enhancer(...)...
//   }

//   const store = {};
//   store.state = preloadedState;
//   store.callbackFns = [];

//   store.getState = () => {
//     return store.state;
//   };

//   store.dispatch = (action) => {
//     store.state = reducer(store.state, action);

//     // call all the subscribed callback functions
//     store.callbackFns.forEach((fn) => fn(action));
//   };

//   store.subscribe = (callbackFn) => {
//     store.callbackFns.push(callbackFn);
//     return () => {
//       store.callbackFns.filter((fn) => fn !== callbackFn);
//     };
//   };

//   store.dispatch({ type: "redux/INIT" });

//   return store;
// };

// export default store;
