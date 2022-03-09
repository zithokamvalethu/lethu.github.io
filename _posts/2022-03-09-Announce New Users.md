---
Layout:

Title: "Daily Summary"

Date: "2022-03-09"

Categories:
---

# INTRODUCTION

Many chat rooms are able to announce when a user connects or disconnects and then display that to all of the connected users in the chat. Seeing as though you already are emitting an event on connect and disconnect, you will just have to modify this event to support such a feature. The most logical way of doing so is sending 3 pieces of data with the event: the name of the user who connected/disconnected, the current user count, and if that name connected or disconnected.

# BODY

First thing to so is to change the event name to 'user', and pass an object along containing the fields 'name', 'currentUsers', and 'connected' (to be true in case of connection, or false for disconnection of the user sent). Be sure to change both 'user count' events and set the disconnect one to send false for the field 'connected' instead of true like the event emitted on connect.

io.emit('user', {
name: socket.request.user.name,
currentUsers,
connected: true
});
Now your client will have all the necessary information to correctly display the current user count and announce when a user connects or disconnects! To handle this event on the client side we should listen for 'user', then update the current user count by using jQuery to change the text of #num-users to '{NUMBER} users online', as well as append a <li> to the unordered list with id messages with '{NAME} has {joined/left} the chat.'.

An implementation of this could look like the following:

socket.on('user', data => {
$('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});

# CONCLUSION

To read more about this visit :https://www.freecodecamp.org/learn/quality-assurance/advanced-node-and-express/announce-new-users
