---
Layout:

Title: "Steamroller"

Date: "2021-05-31"

Categories:
---

# INTRODUCTION
Today I will write about the FreeCodeCamp challenge I solved.

# BODY
The rule of the challenge was to "Flatten a nested array. You must account for varying levels of nesting." <br>
This was my approach to the challenge: <br>
-Our function takes in one argument, arr, which is an array of subarrays (contains numbers, strings, objects).<br>
-We must return the array flattened (see test cases).<br>
-Must do this without methods such as flat() or flatMap().<br>

-first thing I will do is create an empty array, to hold our new flattened array.<br>
-To check if the value is an array or not. It will return true or false.<br>
-If the value in the index is not an array, we can add it into our new flattened array.<br>

-If our arr is [[[1]], 2], our first val is [[1]]. It will not pass the if statement since it is in an array so it will be evaluated by the else statement.<br> We're calling the same flattened.push but not on the val. We're pushing ...steamrollArray(val), which will run the function again but it flattens val with each execution. Once it is out of the subarray, it will be pushed into flattened.<br>

# CONCLUSION
Today I was busy a lot with the task we got the past week, I have succeeded with creating functions that allow me to add, now what's next is adding an input for 'delete' and 'edit'. I need to go and re-learn how to do that so that when I come back tomorrow I won't waste any time and just get on with it. I also solved a kata and did a bit of typing.