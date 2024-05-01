// DoneList.jsx
import React from 'react';
import DoneItem from './DoneItem';

function DoneList({ doneList, onDoneItemClick }) {
  return (
    <div className="donelist">
      <h2>해낸 일</h2>
      <ul>
        {doneList.map((item, index) => (
          <DoneItem key={index} item={item} onClick={() => onDoneItemClick(index)} />
        ))}
      </ul>
    </div>
  );
}

export default DoneList;
