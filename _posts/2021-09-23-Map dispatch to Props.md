---
Layout:

Title: "Daily Summary"

Date: "2021-09-23"

Categories:
---
# INTRODUCTION
Today I am going to write about another Free code camp challenge.

# BODY 
The mapDispatchToProps() function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the mapStateToProps() function. It returns an object that maps dispatch actions to property names, which become component props. However, instead of returning a piece of state, each property returns a function that calls dispatch with an action creator and any relevant action data. You have access to this dispatch because it's passed in to mapDispatchToProps() as a parameter when you define the function.Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps(). This is similar to how it uses store.subscribe() for components that are mapped to state.

For example, you have a loginUser() action creator that takes a username as an action payload. The object returned from mapDispatchToProps() for this action creator this is the example:
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
THe solution for this challenge was diverse from this one but it was not to complex and I was able to crack it and it worked. 

# CONCLUSION
During the long weekend I'll be learning about JavaScript functions and variables.
