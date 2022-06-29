import React, {createContext, useContext} from 'react'

const MyContext = createContext();

function ContextExample1() {
  return(
    <MyContext.Provider value="Hello World">
      <GrandParent />
    </MyContext.Provider>
  )
}
const GrandParent = () => {
  return <Parent />;
}
const Parent = () => {
  return <Child />;
}
const Child = () => {
  return <GrandChild />;
}
const GrandChild = () => {
  return <Message />;
}
const Message = () => {
  const value = useContext(MyContext);
  return <div>Recieved: {value}</div>;
}
export default ContextExample1;