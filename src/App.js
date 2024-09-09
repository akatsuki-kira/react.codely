import React from 'react'
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h4>{count}</h4>
      <button style={{ background:"green"}} onClick ={() => setCount(count + 1)} >Increment</button>
      <button style={{ background:"red"}} onClick={() => setCount(count - 1 )}>Decrement</button>
      <button style={{ background:"gray"}} onClick={() => setCount(0)}>Reset </button>
    </div>
  )
}

export default App

