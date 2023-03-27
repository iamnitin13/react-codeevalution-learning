import React from "react";

export default class ClickCounter extends React.Component {
  render() {
    const { count, onClick } = this.props;
    return <button onClick={onClick}>Clicked {count}</button>;
  }
}
