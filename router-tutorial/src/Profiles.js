import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };
  return (
    <div>
      <h3>사용자 목록: </h3>
      <ul>
        <li>
          <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/profiles/dtakami">dtakami</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/profiles/james">james</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element="유저를 선택해주세요" />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};
export default Profiles;
// 워매 또 책이랑 다르네... v6로 넘어가면서 exact 옵션이 삭제 되고 만약 하위경로에 여러 라우팅을 매칭시키고 싶다면 다음과 같이 URL 뒤에 * 를 붙여 일치 시키는 방식으로 바뀌었단다.
// 또한 v6에서는 element 속성을 통해 바로 컴포넌트를 넣어줄 수 있도록 개선되었다.
// element='유저를 선택해주세요' 이런 식으로.
// https://react.vlpt.us/react-router/03-subroutes.html 참고
