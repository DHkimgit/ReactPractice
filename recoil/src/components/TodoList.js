import React from 'react';
import {atom, useRecoilValue} from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters, { filteredTodoListState } from './TodoListFilters';
import TodoListStats from './TodoListStats';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);;

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;