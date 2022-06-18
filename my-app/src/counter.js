import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 507,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <div>
        <button onClick={()=> {
            this.setState(
                {
                    number: number + 1
                },
            () =>  {
                console.log("방금 setState 가 호출되었습니다.");
            }
            );
        }}
        >
          +1
        </button>
        </div>
      </div>
    );
  }
}
export default Counter;
