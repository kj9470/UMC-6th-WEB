// TodoList.jsx

import React, { useState } from 'react';
import './TodoList.css'; // CSS 파일 임포트 시 파일명이 대소문자가 정확하게 일치해야 함

function TodoList() {
  const [plan, setPlan] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleAddTodo = (event) => {
    if (event.key === 'Enter') {
      const studyPlan = plan.trim();
      if (studyPlan !== '') {
        setTodoList([...todoList, studyPlan]);
        setPlan('');
      }
    }
  };

  const handleMoveToDone = (index) => {
    const item = todoList[index];
    const newTodoList = todoList.filter((_, idx) => idx !== index);
    setTodoList(newTodoList);
    setDoneList([...doneList, item]);
  };

  const handleDeleteDone = (index) => {
    const newDoneList = doneList.filter((_, idx) => idx !== index);
    setDoneList(newDoneList);
  };

  return (
    <div className="plan">
      <h1>UMC Study Plan</h1>
      <div className="input-box">
        <input
          type="text"
          className="input"
          placeholder="스터디 계획을 작성해보세요!"
          value={plan}
          onChange={handlePlanChange}
          onKeyPress={handleAddTodo}
        />
      </div>

      <div className="lists">
        <div className="todolist">
          <h2>해야할 일</h2>
          <ul>
            {todoList.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleMoveToDone(index)}>완료</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="donelist">
          <h2>해낸 일</h2>
          <ul>
            {doneList.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleDeleteDone(index)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
