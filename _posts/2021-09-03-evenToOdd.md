---
Layout:

Title: "Daily Summary"

Date: "2021-09-03"

Categories:
---


# INTRODUCTION
I will share about a kata that requires me to create a function that takes a list of numbers(nums), as the only argument to the function.

# BODY
To find the solution to this kata I used the array map method, which creates a new array with results of calling a function for every array element which the map method has a parameter of num and created an if statement that checks if num reminder 2 strictly equals to 0 it should return the power of that number. And if num is odd it should return the square root of num. So to sum up my number I used reduce which that first return the answer as a string Which I used the Number method to convert it to a number and used toFixed(2) to round up my sum to two decimal.

Final solution to the Kata
const sumSquareEvenRootOdd = ns => { let arr = ns.map(num=>{ if(num%2 ===0){ return Math.pow(num, 2) }else{ return Math.sqrt(num) } }) return Number(arr.reduce((acc, curr)=> acc+=curr).toFixed(2)) };

# CONCLUSION
This kata made me learn some new like toFix method which is not something that I have used before. 