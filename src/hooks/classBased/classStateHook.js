import React from "react";

export default class ClassStateHook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, text: "" };
  }

  incrementCount = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  updateText = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <span>Counter : {this.state.count}</span>
        <button onClick={this.incrementCount}>Class Based Btn</button>

        <input onChange={this.updateText} value={this.state.text} />
        <span>text: {this.state.text}</span>
      </div>
    );
  }
}
