---
Layout:

Title: "Daily Summary"

Date: "2021-09-01"

Categories:
---


# INTRODUCTION
I share will share about the toString method which I used to complete a kata in codewars.

# BODY
What is the toString() method?

The toString() method in JavaScript is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.

Syntax
num.toString(base)

In my case, I had to write a function that converts a given boolean value into its string representation. So a value of true or false is passed as an argument if it is a boolean the function wraps the value with quotes regardless of it being true or false.

solution
function booleanToString(b){ if( b === true || b === false){ return b.toString() } }
# CONCLUSION

To solve this kata I did a research on the toString() method and I used it to get to solution.