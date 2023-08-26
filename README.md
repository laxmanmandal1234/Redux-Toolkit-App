
# Redux Toolkit (RTK)

Redux Toolkit (also known as The Modern Redux) is the standard approach to write your Redux logic in a better and simple way.

This is a simple app yet sufficient to demonstrate and learn Redux Toolkit



## About the app


This is a simple app which manages two global states.

There are two main React components

- Canvas Component
- Counter Component

Canvas Component has a box whose background color is managed by "bgcolor" state.

Counter Component has a box which shows curent counter value and is managed by "count" state.

In the Canvas component , there are 4 buttons of different colors which on clicking dispatch diffetent actions. The action then modify the state (which is the background color of the box).

In the Counter component, + button increments the counter value by 1, - button decrements the counter value by 1, and Add Amount increments the count by the value entered in the input text box, 

Interestingly, none of the states is managed by any react components. The state is managed globally in the Redux Store.



## Demo

.

