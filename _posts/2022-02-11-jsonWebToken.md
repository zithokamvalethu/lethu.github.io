---
Layout:

Title: "Daily Summary"

Date: "2022-02-11"

Categories:
---

# INTRODUCTION

Today I learnt about the Json Web Token, the need to do so was because we are going to have a test on Monday that will be based on it.</br>

# BODY

What is Jwt?<br/>
--JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</br> This information can be verified and trusted because it is digitally signed.</br> JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</br>

-Why should we use Json Web Token?<br/>
--As JSON is less verbose than XML, when it is encoded its size is also smaller, making JWT more compact than SAML.</br> This makes JWT a good choice to be passed in HTML and HTTP environments.</br>

Security-wise, SWT can only be symmetrically signed by a shared secret using the HMAC algorithm.</br> However, JWT and SAML tokens can use a public/private key pair in the form of a X.</br>509 certificate for signing.</br> Signing XML with XML Digital Signature without introducing obscure security holes is very difficult when compared to the simplicity of signing JSON.</br>

JSON parsers are common in most programming languages because they map directly to objects.</br> Conversely, XML doesn't have a natural document-to-object mapping.</br> This makes it easier to work with JWT than SAML assertions.</br>

Regarding usage, JWT is used at Internet scale.</br> This highlights the ease of client-side processing of the JSON Web token on multiple platforms, especially mobile.</br>
# CONCLUSION 
-What is the JSON Web Token structure?</br>
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:</br>

--Header</br>
--Payload</br>
--Signature</br>
