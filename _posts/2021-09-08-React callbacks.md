---
Layout:

Title: "Daily Summary"

Date: "2021-09-08"

Categories:
---

# INTRODUCTION
Today I am going to write about React callbacks.

# BODY
Information in React gets passed around to components in two different ways. First, information can get passed from parent to child as props. That seems pretty straightforward. Establish the property when creating an instance of the child component and it will be available to that instance. But what about data flow in the opposite direction? How does a child component get information back to its parent? Passing props down to the child is also part of that process, but what gets passed is a bit different.
Instead of passing down a piece of the state to a child component, the parent can pass down a callback function. This callback function is run at a later time, usually through some interaction with the child component. The purpose of this callback function is to change a piece of the state that is a part of the parent component. This closes the data loop.

# CONCLUSION
I will now be able to write a callback using react.