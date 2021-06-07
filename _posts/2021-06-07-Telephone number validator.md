---
Layout:

Title: "Telephone number validator"

Date: "2021-06-07"

Categories:
---
# INTRODUCTION
Today I am going to be writing about a telephone number validator.


# BODY
Phone number validation in JavaScript is used to make sure that all the number entered in the specified phone number field should be a valid phone number.<br>
A valid phone number can take on a variety of forms depending on the region. There are universal rules, such as limiting the length of digits or the number containing only numerical values (with slight deviations). Still, in some cases, a telephone number can take on a format using various special characters including plus signs and parentheses or take on a wholly different format than another country or region.

The goal for phone number validation is to be able to check whether, for example, +1-541-754-3010 or 19-49-89-636-48018 are actual phone numbers.

This is  a regular expression to check and validate a phone number:
/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.

So the code had to validate if the phone numbers are actual phone numbers.

# CONCLUSION
After the thorough and careful reading of the challenge command , I was able to write the solution to the problem. I have only one project left to finish.