---
Layout:

Title: "Html entities"

Date: "2021-05-26"

Categories:
---

# INTRODUCTION
Today I will write about converting Html entities.


# BODY
These are the instructions for the challenge: <br>
-Instructions <br >
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. <br>
This is my approach : <br>
-Our one input is str, a string. Looking at the test cases, length and characters vary. Some have white spaces, some have non-letter characters, another is all letters. <br>

-We must return a string. <br>

-We need to convert the non-letter characters to their HTML entities within the str and return that. <br>

 It would be beneficial to split up str into an array to better evaluate the input.<br>
 We can create a variable to hold the str.split('').
 next step will be to loop through our newly created array, going to each index to see if it is equal to one of the special characters we're looking for.<br>

We'll use a for loop and a switch statement. We can make each special character a case and then change that specific index to the HTML entity of the special character.<br>
Our array is now updated with the special characters changed. The last step would be to convert the array back into a string. We can accomplish that using join().<br>

# CONCLUSION
These challenges need a thorough code explanation so that everything is clear before you tackle the challenges.
