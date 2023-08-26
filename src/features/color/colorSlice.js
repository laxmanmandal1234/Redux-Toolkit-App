import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgcolor: "#DB005B",
};

//create slice object
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changedColor: (state, action) => {
      state.bgcolor = action.payload;
    },
  },
});

export const selectColor = (state) => state.color.bgcolor;

export const { changedColor } = colorSlice.actions;
export default colorSlice.reducer; //export reducer

//initialState. it is an object. you can pas multiple properties you want to manage

//Slice - It takes three properties
//name of the slice, initialState and reducers
//reducers are functions - each reducer takes state and action as parameters
//changedColor is the name of one reducer - you can have multiplr reducer for
//different operations you want to do for changing state

//export the most recent value of the state in the selectColor variable where -
// - in line 18, color is name of the slice, bgcolor is the property of the state we are exporting

//Line 21 - named export all the actions defined inside reducers property of slice

//Line 22 - export the reducers. The reducers defined inside reducers property
// of the slice object resides under 'reducer' property of the slice object created using createSlice method
//thats why colorSlice.reducer
