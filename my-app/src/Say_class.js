import React, { Component } from "react";

class Says extends Component {
  state = {
      message: ' '
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ message: "안녕하세요" })}>
          입장
        </button>
        <button onClick={() => this.setState({ message: "안녕히 가세요" })}>
          퇴장
        </button>
        <h1>{message}</h1>
      </div>
    );
  }
}
export default Says;
