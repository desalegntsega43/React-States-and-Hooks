
import React, { Component } from "react";

class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h2>Even Clicks Counter: {this.props.evenCount} </h2>
      </div>
    );
  }
}

export default EvenCounterDisplayer;