import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const CountProvider = ({children}) => {
  const counterState = useState(1);
  return(
    <CounterContext.Provider value={counterState} >
      {children}
    </CounterContext.Provider>
  )
}

const useCounterState = () => {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error('useCounterState should be used within CounterProvider');
  }
  return value;
}

function App() {
  return (
    <CountProvider>
      <div>
        <Value />
        <Button />
      </div>
    </CountProvider>
  )
}

const Value = () => {
  const [counter] = useCounterState();
  return(
    <h1>{counter}</h1>
  )
}

const Button = () => {
  const [, setCounter] = useCounterState();
  const increase = () => {setCounter((prev) => prev + 1)};
  const decrease = () => {setCounter((prev) => prev - 1)};
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default App;
//tellwindcss
