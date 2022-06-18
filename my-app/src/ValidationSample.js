import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationsSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
    count: 5
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
    if(this.state.count > 0){
        this.handleButtonCount();
    }
    else{
        alert('No More Chance')
    }
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
        this.handleButtonClick();
    }
  };

  handleButtonCount = () => {
      this.setState(prevState => ({
          count: prevState.count - 1
      }));
  }

  render() {
    return (
      <div>
        <input
          ref={(ref) => this.input = ref}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? (this.state.validated
                ? 'success'
                : 'failure')
              : ''
          }
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
export default ValidationsSample;
