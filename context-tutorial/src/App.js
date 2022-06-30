import React, {useState, useMemo, useContext, createContext, useRef} from 'react'

const TodosValueContext = createContext();
const TodosActionsContext = createContext();

const Todosprovider = ({children}) => {
    const idRef = useRef(3);
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '밥먹기',
            done: true
        },
        {
            id: 2,
            text: '잠자기',
            done: false
        },
    ])
    const actions = useMemo(() => ({
        add(text) {
            const id = idRef.current;
            idRef.current += 1;
            setTodos ((prev) => [
                ...prev,
                {
                    id,
                    text,
                    done: false
                }
            ]);
        },
        togle(id){
            setTodos ((prev) => prev.map(
                (item) => item.id === id
                ? {
                    ...item,
                    done: !item.done
                }
                : item
            ));
        },
        remove(id) {
            setTodos((prev) => prev.filter((item) => item.id !== id));
        }
    }), [])

    return (
    <TodosActionsContext.Provider value={actions}>
      <TodosValueContext.Provider value={todos}>
        {children}
      </TodosValueContext.Provider>
    </TodosActionsContext.Provider>
    )
};

function useTodosValue() {
    const value = useContext(TodosValueContext);
    if (value === undefined) {
      throw new Error('useTodosValue should be used within TodosProvider');
    }
    return value;
  }
  
function useTodosActions() {
    const value = useContext(TodosActionsContext);
    if (value === undefined) {
      throw new Error('useTodosActions should be used within TodosProvider');
    }
    return value;
  }

function TodosInputAndSubmit() {
    const [text, setText] = useState('');
    const actions = useTodosActions();
    const [...todos] = useTodosValue();

    const onchange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        actions.add(text);
        console.log(todos);
      }

    return(
        <div>
            <input type='text' value={text} onChange={onchange} placeholder='input your todos' />
            <button type='Submit' onClick={handleSubmit}>등록</button>
        </div>
    )
}

function TogleTodosandRemove() {
    const actions = useTodosActions();
    const [...todos] = useTodosValue();
    const [id, setId] = useState('');
    const handleToggle = (id) => {
        actions.toggle(id);
      };
      
    const handleRemove = () => {
        actions.remove();
      };
    
    return (
        <div>
            <ul>{todos.map((todo) => <li key={todo.id}>{todo.id} : {todo.text}</li>)}</ul>
        </div>
    )
}

function App () {
    return(
        <Todosprovider>
            <TodosInputAndSubmit />
            <TogleTodosandRemove />
        </Todosprovider>
    )
}

export default App;
