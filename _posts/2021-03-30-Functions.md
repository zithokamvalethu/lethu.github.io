---
Layout:

Title: "functions"

Date: "2021-03-30"

Categories:
---

# INTRODUCTION

Today I will write about functions . How to use them and what are fuctions all in all .

# BODY

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Why Functions?
You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

# CONCLUSION

Example of a function
function myFunction(p1, p2) {
return p1 \* p2; // The function returns the product of p1 and p2
}
    

