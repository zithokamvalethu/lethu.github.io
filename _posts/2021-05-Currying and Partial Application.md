---
Layout:

Title: "Currying and Partial Application"

Date: "2021-05-17"

Categories:
---

# Introduction
I am going to write about the last FreeCodeCamp test, which I completed today.


# BODY
The arity of a function - The number of arguments it requires. Currying a function- to convert a function of N into N functions of arity 1.
For instance, it restructures a function so it takes one argument, then returns another function that takes the next argument.
Currying - ransformation of a function that translates a function from a callable as f(a,b,c) int callable of f(a)(b)(c) he problem wanted me to use currying and
 return y=>z=> x+y+z;
 
An example of a currying function is 
function curried (x){
    return function (y){
        return x+y;

    }
}
Currying doesn’t call a function. It just transforms it.

# CONCLUSION
I am done with FP and I'm looking forward to solving unique challenges from another Javascript topic. Tomorrow I will begin with a fresh topic. Today I further solved a kata applying higher-order functions.
