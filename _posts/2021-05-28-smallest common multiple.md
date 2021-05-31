---
Layout:

Title: "Smallest common multiple"

Date: "2021-05-28"

Categories:
---


# INTRODUCTION
Today I am going to write about the FreeCodeCampCamp challenge and then touch a bit on the task we were given .



# BODY
Instructions
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.
This was my approach
After reading the starter code, instructions, and test cases, this is what I summarized about this challenge -

-We have one input, an array with two indexes, always positive numbers.

-We must return a number.

We have another math based challenge, just like yesterday's. We'll look more at the formula of what is commonly referred to as Least Common Multiple (LCM).
- start off the challenge by using sort() on arr, to make sure the bigger number is the first index.
- save each value into their own variable. We can do that by destructuring arr.
- use a for loop to check on the divisibility of these two numbers (and the sequence of numbers in between). Before I start the loop, I will declare one more variable:
-  my for loop, it will run as long as low is smaller than high.
- in my for loop, we can first check if multiple is not divisible by low. If it is not, we will add the value of high to multiple, then reduce our i variable and keep looping.
-  added an else if statement, if i equals high, we know we have found our answer. Let's see how this works step by step.

# CONCLUSION
I had a very long week with a pile of work but I managed to push a lot of FreeCodeCamps challenges. With the task we were given I am still facing challenges but I think if I go home and re-do everything I will end up with good results. 
