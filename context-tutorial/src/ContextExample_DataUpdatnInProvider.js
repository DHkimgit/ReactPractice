import React, {useState, useMemo, useContext, createContext} from 'react'

const CounterContext = createContext();

const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(1);

    const actions = useMemo(() => ({
        increase() {
            setCounter((prev) => prev + 1);
        },
        decrease() {
            setCounter((prev) => prev - 1);
        }
    }), []);
    const value = useMemo(() => [counter, actions], [counter, actions]);

    return(
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    );
}

const useCounter = () => {
    const value = useContext(CounterContext);
    if(value === undefined) {
        throw new Error('useCounterState should be used within CounterProvider')
    }
    return value;
}

const App = () => {
    return(
        <CounterProvider>
            <Value />
            <Button />
        </CounterProvider>
    );
}

const Value = () => {
    const [counter] = useCounter();
    return <h1>{counter}</h1>
}

const Button = () => {
    const [ , actions] = useCounter();
    return(
        <div>
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button>
        </div>
    );
}

export default App;