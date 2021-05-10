---
Layout:

Title: "Template literals"

Date: "2021-05-10"

Categories:
---

# INTRODUCTION
Today I've decided to write about the backticks aka 'fancy strings' (``). The reason why I am writing about these is because I've just realized their importance and now I see there's a code which specifically requires the template strings .

# BODY
What are template strings ?
These are template literals which allow embedded expressions , in other words they interpolate  variables , avoid the need to escape qoute characters, and allow multi-line strings without the \n.
What are the uses of the fancy strings?
Backticks are commonly used for multi-line strings or when you want to interpolate an expression within your string.
Expressions
The template literal syntax looks like this: ${expression}. The ${} syntax allows us to put an expression in it and it will produce the value.

# CONCLUSION
 The main reason why I chose this topic is all because of a kata which I solved using template literals.
the function was supposed to return Hello plus a name. It looked something like this:
 function greet (name){
     <!-- the solution -->
     return `Hello,${name} how are you today?`;
 }

