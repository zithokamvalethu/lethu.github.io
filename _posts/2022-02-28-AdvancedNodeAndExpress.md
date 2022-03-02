---
Layout:

Title: "Daily Summary"

Date: "2022-02-28"

Categories:
---

# INTRODUCTION

I've not so long ago started with Advanced Node and Express which today I will touch on. From what I have learnt so for I can say that with Advanced Node and Express we are more focused on the safety side of using websites creating security for users which protects users credentials and personal log in information.

Today I am going to explain on : Setup a template's engine.

What is a template engine?

- Template engine is what allows you to use a static template file (such as those that are written in Pug)in your App.

# BODY

Template engine-
At runtime the template engine replaces variable in a template file with actual values which can be supplied by our server, It then transforms the template into a static HTML file that is sent to the client.This makes it easy to design an HTML page and enables displaying variables on the page without needing to make an API call from the client.
<br>
To render template files, set the following application setting properties, set in app.js in the default app created by the generator:

views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.
view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').<br>

Then install the corresponding template engine npm package; for example to install Pug:<br>
($ npm install pug --save.) <br>
After the view engine is set, you don’t have to specify the engine or load the template engine module in your app; Express loads the module internally, as shown below (for the above example).<br>

app.set('view engine', 'pug')<br>
Create a Pug template file named index.pug in the views directory, with the following content:

html
head
title= title
body
h1= message
Then create a route to render the index.pug file. If the view engine property is not set, you must specify the extension of the view file. Otherwise, you can omit it.<br>

app.get('/', (req, res) => {<br>
res.render('index', { title: 'Hey', message: 'Hello there!' })<br>
})<br>
When you make a request to the home page, the index.pug file will be rendered as HTML.<br>

# CONCLUSION

To read more about template engine's visit:https://www.tutorialsteacher.com/nodejs/template-engines-for-nodejs
