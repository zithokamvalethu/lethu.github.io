---
Layout:

Title: "functions"

Date: "2021-04-01"

Categories:
---

# INTRODUCTION
Today I am going to write about how I implemented my functions and why I implemented them the way I did.

# BODY
First of all I linked my index.js to my index.html using a link and because I linked it on the top part I had to mention defer for it to work.

On my index.html I used a form and onSubmit and assigned 'autocomplete' .
autocomplete is for prediction and the history that the inputs keeps so I switched it off to prevent that from happening.
The onsubmit part was is for default behavior and reading form data.

1 On my js I created a function 'OnformData'- were we retrieve all values on the formData.
2 the second function is ' readFormData' - inside this form we can push values e.g on our app we have the name value we can also push that value and the others and return formData.
3 The 3rd function is 'insertNewRecords'- we wsill be passing the formData into it with the same properties , insert them as a table because they are in that form on our html, insertNewRow pass the length of the table initally its 0 and on each insertion it will increment by 1.
4 Insert cell for employee details with  a zero index and call that function.
 That is basically what I did to make the App display and add elements on submit .

 # CONCLUSION
 I realised that making functions can be hard you need to know what you want to do and create that function although it wont be easy at all . Also do not forget to call your function each time you create it . Personally it is still hard to create functions that work but I know i'm getting there.