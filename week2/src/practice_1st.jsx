/* eslint-disable */
import { useState } from "react"

function App() {

  const [num, setNum] = useState(0);

  function plusNum() {
    console.log("increase가 클릭됨");
    setNum(num + 1);
  }

  function minusNum() {
    console.log("decrease가 클릭됨");
    setNum(num - 1);
  }

  return (
    <>
      <div>
        <h4>{ num }</h4>
        <div className="button">
          <button onClick={ plusNum }>+1</button>
          <button onClick={ minusNum }>-1</button>
        </div>
      </div>
    </>
  )
}

export default App
