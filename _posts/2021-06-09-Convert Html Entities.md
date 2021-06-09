---
Layout:

Title: "Convert Html Entities"

Date: "2021-06-09"

Categories:
---

# INTRODUCTION
Today I will be writing about one of the FreeCodeCamp challenges, that I've done but today finaly got to understand it.


You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you can use different methods.

1) I can use regular Expressions 
2) I will benefit from a chart with all the html entities so you know which ones are the right ones to put.
3) I should separate the string and work with each character to convert the right ones and then join everything back up.

Code Explanation
-I need to create an object to use the Lookup functionality and easily find the characters.
-And then split the original string by characters and use map to check for the changed html entity or use the same one.
-after that the a function is added which is what returns the converted entity or the original one if there is no conversion.
-Lastly we join all the characters once again.

# CONCLUSION
That is how I understood the challenge and the task I had to do. Until I understand everything that has to do with Javascript I will not move on to other challlenges because I do not want to encounter problems on the way which may cause me to go back to Javascript.