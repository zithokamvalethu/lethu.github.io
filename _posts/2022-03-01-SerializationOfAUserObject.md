---
Layout:

Title: "Daily Summary"

Date: "2022-03-01"

Categories:
---

# INTRODUCTION

Today I was doing A challenge on free code camp and it was a build up challenge for the next challenges. I am going to touch on all of those challenges which needed serialization and deserialization.

# BODY

serialization and deserialization are important concepts in regards to authentication. To serialize an object means to convert its content into small key that can then be deserialized into the original object. This is what allows us to know who has communicated with the server without having to send the authentication data, like the username and password, at each request for a new page.

In order to do so we need to have a serialized function and deserialized function. In passport we create those with passport.serializeUser( OURFUNCTION ) and passport.deserializeUser( OURFUNCTION )

The serializeUser is called with 2 arguments, the full user object and a callback used by passport. A unique key to identify that user should be returned in the callback, the easiest one to use being the user's \_id in the object. It should be unique as it is generated by MongoDB. Similarly, deserializeUser is called with that key and a callback function for passport as well, but, this time, we have to take that key and return the full user object to the callback. To make a query search for a Mongo \_id, you will have to create const ObjectID = require('mongodb').ObjectID;, and then to use it you call new ObjectID(THE_ID)

# CONCLUSION

To read more about this visit :https://www.tabnine.com/code/javascript/functions/serialize
