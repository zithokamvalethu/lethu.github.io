---
Layout:

Title: "Daily Summary"

Date: "2021-08-30"

Categories:
---


# INTRODUCTION
I will write about react state, setState, and props.

# BODY
What is State in ReactJS?
A state is an object that stores the values of properties belonging to a component that could change over a while. A state can be modified based on user action or network changes. Every time the state of an object changes, React re-renders the component to the browser. The state object is initialized in the constructor and the state object can store multiple properties. The state value can be changed with 'this.setState()'.

Example on how a state is created in a class component:

class App extends React.component{ constructor(props){ super(props); this.state( name: 'TCG' ) } render(){ return (

{this.state.name}
) } }
The setState() method
A state can be updated in response to event handlers, server responses, or props. This is done using the setState(). The setState() sets all updates made to the component state and informs React to re-render the component and its child with the update state.

Example on how to change value using setState():

class App extends React.component{ constructor(props){ super(props); this.state( name: 'TCG' ) this.handleClick = this.handleClick.bind(this) } handleclick(){ this.setState({ name: 'Coding Is Awesome!' }) } render(){ return (

{this.state.name}
Click Here ) } }
Props
Props are used to pass data and event handlers to its child components and they immutable - Once set, props cannot be changed. Props can be used in both functional and class components. Props are set by parent component for child components.

# CONSLUSION
I'm beginning to understand what components are, props, state, setState and that react to make your code to be more organized with components. As I am done with React I still plan to learn more about React.