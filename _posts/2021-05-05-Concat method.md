---
Layout:

Title: "Concat() method"

Date: "2021-05-05"

Categories:
---

# INTRODUCTION
Today I'll write about the concat method , which is one of the method I have had to use on one of the challenges in Functional programming.



#  BODY
What does concatenation mean?
Concatenation means to join items end to end.

These are the usages of concat()-
The CONCAT function combines the text from multiple ranges and/or strings, but it doesn't provide delimiter or IgnoreEmpty arguments. 

The concat() method is used to merge or combine two or more arrays. This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

- Array concat() method
Description
Javascript array concat() method returns a new array comprised of this array joined with two or more arrays.

Syntax
The syntax of concat() method is as follows −

array.concat(value1, value2, ..., valueN);
valueN − Arrays and/or values to concatenate to the resulting array.

Return Value
This method returns an array object representing the resultant array, a concatenation of the current and given array(s).
The concat method is not tooo handy I easily understood it and also tackled the challenge as soon as I understood what it needed.

# CONCLUSION
So the problem I had to solve the instruction was: Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
solution
- return original.concat(attach)

