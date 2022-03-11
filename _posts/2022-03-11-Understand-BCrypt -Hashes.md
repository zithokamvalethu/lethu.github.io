---
Layout:

Title: "Daily Summary"

Date: "2022-03-11"

Categories:
---

# INTRODUCTION

- Understand BCrypt Hashes
  For this challenges, I had to be work with a new starter project that is different from all the previous ones I'd been working with.
  BCrypt hashes are very secure. A hash is basically a fingerprint of the original data- always unique. This is accomplished by feeding the original data into an algorithm and returning a fixed length result. To further complicate this process and make it more secure, i can also salt ir hash. Salting i hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.

# BODY

BCrypt hashes will always looks like $2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm which does have a structure. The first small bit of data $2a is defining what kind of hash algorithm was used. The next portion $13 defines the cost. Cost is about how much power it takes to compute the hash. It is on a logarithmic scale of 2^cost and determines how many times the data is put through the hashing algorithm. For example, at a cost of 10 i are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would takes multiple days to complete a hash. A cost of 12 is considered very secure at this time. The last portion of your hash $ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm, looks like one large string of numbers, periods, and letters but it is actually two separate pieces of information. The first 22 characters is the salt in plain text, and the rest is the hashed password!

To begin using BCrypt, add it as a dependency in your project and require it as 'bcrypt' in your server.

# CONCLUSION

To read more about this visit : https://www.devglan.com/online-tools/bcrypt-hash-generator#:~:text=Bcrypt%20uses%20adaptive%20hash%20algorithm,results%20for%20the%20same%20string.
