// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, onTodoItemClick }) {
  return (
    <div className="todolist">
      <h2>해야할 일</h2>
      <ul>
        {todoList.map((item, index) => (
          <TodoItem key={index} item={item} onClick={() => onTodoItemClick(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
