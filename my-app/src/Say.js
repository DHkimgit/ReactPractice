import React, { useState } from "react";

const Say = () => {
  const [message, setMassage] = useState('');
  const onClickEnter = () => setMassage("안녕하세요!");
  const onClickLeave = () => setMassage("안녕히 가세요!");

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{clolr : 'red'}} onClick={() => setColor('red')}> 빨간색 </button>
      <button style={{clolr : 'green'}} onClick={() => setColor('green')}> 초록색 </button>
      <button style={{clolr : 'blue'}} onClick={() => setColor('blue')}> 파란색 </button>
    </div>
  );
};
export default Say;
