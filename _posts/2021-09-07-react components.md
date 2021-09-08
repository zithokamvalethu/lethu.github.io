---
Layout:

Title: "Daily Summary"

Date: "2021-09-07"

Categories:
---

# INTRODUCTION
Today I am going to write about React components.I gave myslef the task to learn about react components so that I can implement them in future.


# BODY


What is a React component?
A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components in React basically return a piece of JSX code that tells what should be rendered on the screen

What are pure components React?
Image result
Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered.

Example
Create a Class component called Car

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
# CONCLUSION
I have learned a lot about components and I plan to use them in future.