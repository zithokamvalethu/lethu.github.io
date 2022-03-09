---
Layout:

Title: "Daily Summary"

Date: "2022-02-09"

Categories:
---

# INTRODUCTION

Today I was connecting to my Database using Mongoose and MongoDB.
I had been trying to do that for a week now and I have finally found the best tutorial to teach me how to do so.

# BODY

I had to find my database connection info to do so I had to Log in to the mLab management portal.</br> On mLab I had to navigate to the the MongoDB deployment and connect to the deployment which is dedicated for unsubscribed users.</br>Once I was done with the whole process I had to install all the packages I need for it to work on my Visual Studio Code.</br>

Steps for Connecting, Saving and Finding Data in MongoDB with NodeJS and ExpressJS.</br>

- Firstly installing the necessary dependencies namely Express,Mongoose,Cors:</br>
  --Express — Fast, unopinionated, minimalist web framework.</br>
  --Mongoose — Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment .</br>
  --Cors — Middleware for dynamically or statically enabling CORS in express/connect applications.</br>
- Secondly create database schema :</br>
  --A database schema outlines the architecture of your database and helps ensure that the data has consistent formatting, every record entry has a unique primary key, and essential data doesn't get omitted.</br>
- Create model and connect to MongoDB.</br>
  -- A model consist of your mLab URI which is a type of a URL to connect to your database.</br>
  --Syntax :mongoose.connect('mongodb://dbuser:dbpassword@ds055555.mlab.com:55555/dbName').</br>
- Lastly implementing a route which we will use to insert data to the database.</br>
  And when I had did all the above steps my App worked but the only thing I'm left to do is check if my routes were correct..</br>

# CONCLUSION

Tomorrow I will focus on getting my routes working and thereafter get on with work for the rest of day that I have to do such as Codewars FreeCodeCamp and polishing some of my apps code.</br>
