---
Layout:

Title: "Daily Summary"

Date: "2022-03-01"

Categories:
---

# INTRODUCTION

I encountered a challenge in which I had to set up an environment for advanced node and Express.
It was pretty challenging and I spent most of my time fixing and debugging the code but I did not win.
The issue was connecting my client to the server and all the other challenges were passing.

What was the requirement ?
So, in my routes.js file, add a GET route pointing to /chat which makes use of ensureAuthenticated, and renders chat.pug, with { user: req.user } passed as an argument to the response. then, alter my existing /auth/github/callback route to set the req.session.user_id = req.user.id, and redirect to /chat.
The second step is to add socket.io@~2.3.0 as a dependency and require/instantiate it in your server defined as follows, with http (comes built-in with Nodejs):

#

In summation this is overall what I had to do :
const http = require('http').createServer(app);
const io = require('socket.io')(http);
Now that the http server is mounted on the express app, you need to listen from the http server. Change the line with app.listen to http.listen.

The first thing needing to be handled is listening for a new connection from the client. The on keyword does just that- listen for a specific event. It requires 2 arguments: a string containing the title of the event that's emitted, and a function with which the data is passed though. In the case of our connection listener, we use socket to define the data in the second argument. A socket is an individual client who is connected.

To listen for connections to your server, add the following within your database connection:

io.on('connection', socket => {
console.log('A user has connected');
});
Now for the client to connect, you just need to add the following to your client.js which is loaded by the page after you've authenticated:

/_global io_/
let socket = io();
The comment suppresses the error you would normally see since 'io' is not defined in the file. We've already added a reliable CDN to the Socket.IO library on the page in chat.pug.

# CONCLUSION

To read more information about this visit :https://www.freecodecamp.org/learn/quality-assurance/advanced-node-and-express/set-up-the-environment
