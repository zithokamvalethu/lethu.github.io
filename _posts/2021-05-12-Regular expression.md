---
Layout:

Title: "Regular expressions"

Date: "2021-05-12"

Categories:
---
# INTRODUCTION
 Today I will write about regular expression because I was dealing with them on FreeCodeCamp today. I came across challenges that needed me to go back and refer on my notes and remember how to use them.

# BODY
 What are regular expressions?
 Regular expressions are designs or patterns used to match combinations in strings .
 Regular expressions can be used hand in hand with the split(), join() and other methods depending on what you are trying to achieve on your code.
 You may find that in your code you have an argument delimeter there is a certain a regex you can use so that your code ignores that.
 Argument delimeter is a comma or other panctuation marks separating successive arguments in a command or statement in a computer program.

 for instance when you have words separated by a hyphen and also you need to split first
 e.g ("Hello World,I-am code")
 this is the regex you would use in order for your test to pass so this is how it will go .
 first of all this is the regex you would use (/\W/) in that certain challenge because it amatches any non-word character including spaces and panctuations except for underscores.
 the solution would be :
 return str.split(/\W/); .


# CONCLUSION
 Regex are important for match combination in strings, and also because regex are also objects. A way of using a regular expression literal, is to enclose the pattern between slashes.
