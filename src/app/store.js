import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../features/color/colorSlice";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    color: colorReducer,
    counter: counterReducer,
  },
});

export default store;

//Redux store is an objecty
//there can be multiple slice objects for managing different states like users, posts, etc
// the reducers defined inside all the slice objects are stored here in
//the Reduc Store under 'reducer' property
//color: colorReducer, where color is the 'name' of the Slice and colorReducer is the reducer from colorSlice.js imported as colorReducer
