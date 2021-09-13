---
Layout:

Title: "Daily Summary"

Date: "2021-09-09"

Categories:
---

# INTRODUCTION
I am going to write about the concepts I have learned about React which I work with a lot when doing Redux.


# BODY
Action :
An action is simply a JavaScript object that contains information about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.

Action creator:
After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

Action store:
Another method you have access to on the Redux store object is store.subscribe(). This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.


# CONCLUSION

 These are the concepts I have leaned and used a lot.
  