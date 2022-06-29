import React, { createContext, useContext } from "react";

const MyContext = createContext("defaule value");
// 디폴트 설정

function useMycontext() {
  const value = useContext(MyContext);
  if (value === undefined) {
    throw new Error("useMyContext should be used within MyContext.Provider");
  } // .Provider 를 깜빡하면 오류를 띄우게 설정
  return value;
}
// 커스텀 훅을 사용하기

function ContextExample2() {
  return (
    <MyContext.Provider value="Hello World">
      <GrateComponent />
    </MyContext.Provider>
  );
}
const GrateComponent = () => {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
};

const FirstComponent = () => {
  const value = useMycontext();
  return <div>First Component says: "{value}"</div>;
};
const SecondComponent = () => {
  const value = useMycontext();
  return <div>Second Component says: "{value}"</div>;
};
const ThirdComponent = () => {
  const value = useMycontext();
  return <div>Third Component says: "{value}"</div>;
};

export default ContextExample2;
