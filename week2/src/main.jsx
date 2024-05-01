import React from 'react'
import ReactDOM from 'react-dom/client'
import Prac1 from './practice/Prac1'
import Prac2 from './practice/Prac2'
import TodoList from './misson/TodoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Prac1 />
    <Prac2 /> */}
    <TodoList />
  </React.StrictMode>,
)
