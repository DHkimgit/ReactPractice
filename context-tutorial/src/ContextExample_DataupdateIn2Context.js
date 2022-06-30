import React, {useState, useMemo, useContext, createContext} from 'react'

const CounterValueContext = createContext();
const CounterActionContext = createContext();

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

    return(
        <CounterActionContext.Provider value = {actions}>
            <CounterValueContext.Provider value={counter}>
                {children}
            </CounterValueContext.Provider>
        </CounterActionContext.Provider>
    );
}

const useCounterValue = () => {
    const value = useContext(CounterValueContext);
    if(value === undefined) {
        throw new Error('useCounterValue should be used within CounterProvider')
    }
    return value;
}

const useCounterAction = () => {
    const actions = useContext(CounterActionContext);
    if(actions === undefined) {
        throw new Error('useCounterActions should be used within CounterProvider')
    }
    return actions;
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
    const counter = useCounterValue();
    return <h1>{counter}</h1>
}

const Button = () => {
    const actions= useCounterAction();
    return(
        <div>
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button>
        </div>
    );
}

export default App;