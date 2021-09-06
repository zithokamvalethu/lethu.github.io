---
Layout:

Title: "Daily Summary"

Date: "2021-09-02"

Categories:
---


# INTRODUCTION

Well today what I will write about is the codewars kata I encountered while I was solving Javascript katas. The problem first gave me a bit of a challenge and I ended up searching for a solution. The solution needed me to use regexp.

# BODY
Well this is the solution which I thought would work but it did not and I kept asking myself why did it not work
function removeExclamationMarks(s) { return s.replace('!', '') }  

I n order for me to find a solution I had to look into regexp as a way to solve the kata. Regexp is used to match text with a pattern.

The literal notation of regexp
let regexp = /do something/;

Literal notation's parameters are enclosed between slashes and not quotes.

Final solution
function removeExclamationMarks(s) { return s.replace(/!/g, '') } The g in regular expression is used to check for all possible matches in the string.

# CONCLUSION
The kata really gave me a challenge but I will know in future when I find a problem such at that one.