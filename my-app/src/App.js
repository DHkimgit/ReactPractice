import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

function getRendomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRendomColor()
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color = {this.state.color}/>
      </div>
    )
  }
}



export default App;
