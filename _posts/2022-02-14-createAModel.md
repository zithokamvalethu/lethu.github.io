---
Layout:

Title: "Daily Summary"

Date: "2022-02-14"

Categories:
---

# INTRODUCTION

I managed to finish the first Free code camp challenge on the boilerplate even though I had finished it successfully on Visual Studio code last Friday.</br> The second challenge is about creating a model.</br> I am going to write about it.</br>

# BODY

We need a Schema.</br>
--Everything in Mongoose starts with a Schema.</br> Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.</br>

--Each schema maps to a MongoDB collection.</br> It defines the shape of the documents within that collection.</br> Schemas are building block for Models.</br> They can be nested to create complex models, but in this case we'll keep things simple.</br> A model allows you to create instances of your objects, called documents.</br>

--Replit is a real server, and in real servers the interactions with the database happen in handler functions.</br> These functions are executed when some event happens (e.g someone hits an endpoint on your API).</br> We’ll follow the same approach in these exercises</br> The done() function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating, or deleting</br> It's following the Node convention, and should be called as done(null, data) on success, or done(err) on error</br>
NB - When interacting with remote services we may encounter errors</br>

In this challenge I had to create a Schema called a personSchema having this prototype:</br>
name : string [required]</br>
age : number </br>
favoriteFoods : array of strings (\*)</br>
And then the last thing was to create a model called Person from the person Schema.

# CONCLUSION

These are the types of the Schemas that are allowed are:
-String</br>
Number</br>
Date.</br>
Buffer.</br>
Boolean.</br>
Mixed.</br>
ObjectId.</br>
Array.</br>
Decimal128.</br>
Map.</br>

Schemas not only define the structure of your document and casting of properties, they also define document instance methods, static Model methods, compound indexes, and document lifecycle hooks called middleware..</br>
