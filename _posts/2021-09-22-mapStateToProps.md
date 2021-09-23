---
Layout:

Title: "Daily Summary"

Date: "2021-09-22"

Categories:
---
# INTRODUCTION
I am going to write about the challenge that I was doing on Free code camp.

# BODY
Map State to Props
The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().

In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux connect method to connect them to your components in another challenge.

Note: Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps().

# CONCLUSION
The solution was to create a const state and set it to an empty array, 2nd create a function called mapStateToProps and pass in an argument as state then 3rd return an object.