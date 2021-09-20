---
Layout:

Title: "Daily Summary"

Date: "2021-09-15"

Categories:
---

# INTRODUCTION
Today I am going to write about Redux store.<br>



# BODY
what is Redux Store?
The Redux store brings together the state, actions, and reducers that make up your app.<br>

 The store has several responsibilities:

Holds the current application state inside
Allows access to the current state via store.<br>

getState();
Allows state to be updated via store.<br>

dispatch(action);
Registers listener callbacks via store.<br>

subscribe(listener);
Handles unregistering of listeners via the unsubscribe function returned by store.<br>

subscribe(listener).<br>


It's important to note that you'll only have a single store in a Redux application.<br>

 When you want to split your data handling logic, you'll use reducer composition and create multiple reducers that can be combined together, instead of creating separate stores.<br>



-Creating a Store
Every Redux store has a single root reducer function.<br>



Example:
const store = createStore(rootReducer).<br>

# CONCLUSION
This was the first challenge on Redux and from there it then builds up a lot of things are introduced.