// TodoItem.jsx
import React from 'react';

function TodoItem({ item, onClick }) {
  return (
    <li>
      {item}
      <button onClick={onClick}>완료</button>
    </li>
  );
}

export default TodoItem;
