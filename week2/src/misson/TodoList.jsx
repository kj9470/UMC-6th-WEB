// TodoList.jsx
import React, { useState } from 'react';
import InputBox from '..components/InputBox';
import TodoList from '..components/TodoList';
import DoneList from '..components/DoneList';
import './TodoList.css';

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
      <InputBox value={plan} onChange={handlePlanChange} onKeyPress={handleAddTodo} />
      <div className="lists">
        <TodoList todoList={todoList} onTodoItemClick={handleMoveToDone} />
        <DoneList doneList={doneList} onDoneItemClick={handleDeleteDone} />
      </div>
    </div>
  );
}

export default TodoList;
