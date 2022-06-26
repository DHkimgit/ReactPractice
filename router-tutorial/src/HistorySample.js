import { useNavigate } from 'react-router-dom';

function HistorySample() {
   const navigate = useNavigate();
   const goBack = () => {
   const confirm = window.confirm('정말 떠나시겠어요?')
   if (confirm) {
      navigate(-1);
    }
  };

const goHome = () => {
    navigate('/');
  }
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}
export default HistorySample;
// import React, { Component } from 'react';
// class HistorySample extends Component {
//     //뒤로가기
//     handleGoBack = () => {
//         this.props.history.goBack();
//     };

//     //홈으로 이동
//     handleGoHome = () => {
//         this.props.history.push('/');
//     };

//     componentDidMount() {
//         this.unblock = this.props.history.block('정말 떠나실 건가요?');
//     }

//     componentWillUnmount() {
//         if(this.unblock) {
//             this.unblock();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleGoBack}>뒤로</button>
//                 <button onClick={this.handleGoHome}>홈으로</button>
//             </div>
//         );
//     }

// }



