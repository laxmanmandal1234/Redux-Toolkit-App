
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

<img width="959" alt="App Screenshot" src="https://github.com/laxmanmandal1234/Redux-Toolkit-App/assets/84460666/50ead9d9-03b7-4579-81e7-cf60a0b985f3">

![React Toolkit App - Demo](https://github.com/laxmanmandal1234/Redux-Toolkit-App/assets/84460666/38e158af-3ea4-4113-8606-2aa9127defff)


## Resources

 - [How to Use Redux and Redux Toolkit – Tutorial for Beginners](https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/)
 - [Youtube: ReactJs - Learn ReactJs, Practically](https://www.youtube.com/playlist?list=PLIJrr73KDmRyrDnDFy-hHvQ24rRjz6e_J)

