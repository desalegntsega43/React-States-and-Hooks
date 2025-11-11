import React, { Component } from "react";
import CounterDisplayer from "../compoCounterDisplayer/CounterDisplayer"
import EvenCounterDisplayer from "../evenCounterDisplayer1/EvenCounterDisplayer";

class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      evenCount: 0
    };
  }

  allClicksCounter = () => {
    this.setState(prevState => {
      const newCount = prevState.count + 1;
      const EvenCountNumber = newCount % 2 === 0 ? newCount : prevState.evenCount;
      
      return {
        count: newCount,
        evenCount: EvenCountNumber
      };
    });
  };

  render() {
    return (
      <div style={{ border: "6px solid lightgreen", padding: "20px", margin: "10px", textAlign: 'center', marginTop: '50px', marginBottom: '20px'}}>
        <button onClick={this.allClicksCounter}>Click here</button>
        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer evenCount={this.state.evenCount} />
      </div>
    );
  }
}

export default MyCounter;