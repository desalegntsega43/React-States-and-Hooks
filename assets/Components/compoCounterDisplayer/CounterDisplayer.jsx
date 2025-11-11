import React, { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h2>All clicks counter: {this.props.count}</h2>
      </div>
    );
  }
}

export default CounterDisplayer;