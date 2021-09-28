---
Layout:

Title: "Daily Summary"

Date: "2021-09-27"

Categories:
---
# INTRODUCTION
Today I am going to write about the connect() function which I came across on Free code camp and talk about its functionality.

# BODY
The connect() function connects a React component to a Redux store.

It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.<br>
syntax :<br>
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
- on the (MyComponent)- you call or invoke your component.

connect() Parameters
connect accepts four different parameters, all optional. By convention, they are called:

mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object

# CONCLUSION
The connect function is not tooo complicated and I was able to finish the challenge.
