import React from "react";

export default class HoverCounter extends React.Component {
  render() {
    const { count, onMouseOver } = this.props;
    return <button onMouseOver={onMouseOver}>MouseOver {count}</button>;
  }
}
