import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
	this.state = {
	  }
  
	// console.log("1: ", this.state.hasBeenClicked);
  }

  handleClick = () => {
	this.setState({
	  hasBeenClicked: true
	})
	// console.log("2: ", this.state.hasBeenClicked); // prints false
  }

  render() {
	// console.log("3: ", this.state.hasBeenClicked);
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;