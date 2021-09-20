---
Layout:

Title: "Daily Summary"

Date: "2021-09-16"

Categories:
---

# INTRODUCTION
I did a solution on React Redux on Free Code Camp and it taught me how to manage a state locally.

# BODY

I had to create a DisplayMessage component.
The challenge  asked me the following:


First, in the render() method, have the component render an input element, button element, and ul element. When the input element changes, it should trigger a handleChange() method. Also, the input element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements

Solution:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  submitMessage = () => {
    this.setState(prevState => ({
      input: "",
      messages: [...prevState.messages, prevState.input]
    }))
  }
  // add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <button type="button" onClick={this.submitMessage}>Add message</button>
        <ul>
         {this.state.messages.map(msg => (
           <li>{msg}</li>
         ))}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};

# CONCLUSION
This challenge tuaght me a lot and I think I can be able to re-do it next time.