---
Layout:

Title: "Sum all Primes"

Date: "2021-05-26"

Categories:
---
# INTRODUCTION
Today I will write about the challenge I solved on FreeCodeCamp.


# BODY 
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
The instructions for this challenge are short and to the point.

Our one input is num, an integer.

We must return an integer.

We need to do two things. Identify all the prime numbers within num and then add them up.
function sumPrimes(num) {
  let sum = 0;
  for (let j = 1; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= (n/2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
# CONCLUSION
This is one of the challenges I did on FreeCodeCamp today.