---
Layout:

Title: "Day Summary"

Date: "2021-08-04"

Categories:
---
# INTRODUCTION
Toady I am going to write about self-closing tags which is a challenge I came across on FreeCodeCamp today. I found it informative and it gave me some light.

# BODY
This is another important way in which JSX differs from HTML is in the idea of the self-closing tag.

In HTML, almost all tags have both an opening and closing tag: <div></div>; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

For example the line-break tag can be written as <br> or as <br />, but should never be written as <br></br>, since it doesn't contain any content.

In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />. You will see in later challenges that this syntax is useful when rendering React components.

# CONCLUSION
Today I also fixed my errors on the Admin App and tomorrow I want to do the Edit and the Delete.