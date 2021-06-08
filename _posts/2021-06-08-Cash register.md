---
Layout:

Title: "Cash register"

Date: "2021-06-08"

Categories:
---
# INTRODUCTION
Today I am going to write about completing the cash register project.
# BODY
I will create a loop that will do all the math at *100 to avoid rounding errors, it runs through the cashArr backwards finding
  the highest denomination of each possible change it can until the change hits 0 
  
-This loop will go through the result Array and divide any number that's not 0 by 100 to get us back to the 
  proper format. 
  
-This if logic will check if we have zeroed the change (meaning we had enough proper change), if not, we send
  the insufficient funds message.

-This if logic will check if we had enough change as well as if result is the same as cid(meaning there was
  exactly enough change), if so it sends the closed message.
  

- Anything else will have to be we had enough change with change left over, so we send the open message after
  we reverse the results array and remove all entries that have a 0 for value. This creates the array needed for
  output.
I also tried completing the recipe box app's edit button but I keep on missing somethings which I will work on first thing tomorrow.

# CONCLUSI0N
Tomorrow I am going to revisit the past javascript topics and solve katas .