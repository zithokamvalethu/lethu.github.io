---
Layout:

Title: "Day Summary"

Date: "2021-08-23"

Categories:
---

# INTRODUCTION
Today on Free code camp I got introduced to a new topic which is Inline styles. I am going to write.


# BODY
Inline Styles for HTML
Introduction
Usually, CSS is written in a separate CSS file (with file extension .css) or in a <style> tag inside of the <head> tag, but there is a third place which is also valid. The third place you can write CSS is inside of an HTML tag, using the style attribute. When CSS is written using the style attribute, it’s called an “inline style”. In general, this is not considered a best practice. However, there are times when inline styles are the right (or only) choice.

Inline Style Syntax
Inline styles look and operate much like CSS, with a few differences. Inline styles directly affect the tag they are written in, without the use of selectors. Here’s a basic HTML page using inline styles:

When to Use Inline Styles
Professional web developers do not use inline styles often, but there are times when they are important to understand or necessary to use. Here are a few places you may see inline styles:

HTML e-mail
Older websites
CMS content (e.g. WordPress, Drupal)
Dynamic content (i.e. HTML created or changed by JavaScript)
Emails often include HTML content. When you receive a fancy looking e-mail, it is either one big image file or it is an HTML e-mail. You can craft HTML e-mails yourself, but they can be tricky. The HTML viewers in email clients are not standardized, and most of them do not allow <style> tags. For this reason, HTML e-mail often contain lots of inline styles. Some of the styles included may be archaic, to support older e-mail-viewing clients.

Another time you will see inline styles is on dynamic websites that use JavaScript. Often, JavaScript scripts will add inline styles to HTML. For example, a common way to hide a dialog box is to add the inline style display: none;.

# CONCLUSION

Sometimes, inline styles are necessary. If you are building a web page by hand, however, you should avoid them whenever possible. Using a separate CSS file is the most powerful and flexible method.