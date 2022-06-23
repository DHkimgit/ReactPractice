import React, {usestate} from 'react'
import './App.css';
import TodoTnsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = usestate([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoTnsert />
      <TodoList todos={todos}/>
    </TodoTemplate>
  )

}

export default App;
