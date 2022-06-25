import React, {useState, useRef, useCallback} from 'react'
import './App.css';
import TodoTnsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 0; i<=2500; i++) {
    array.push({
      id:i,
      text: `할일 ${i}`,
      chseked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );
  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
      );
    },
    [],
  );
  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(2501);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    }, [],);
  return (
    <TodoTemplate>
      <TodoTnsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )

}

export default App;
