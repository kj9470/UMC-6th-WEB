// DoneItem.jsx
import React from 'react';

function DoneItem({ item, onClick }) {
  return (
    <li>
      {item}
      <button onClick={onClick}>삭제</button>
    </li>
  );
}

export default DoneItem;
