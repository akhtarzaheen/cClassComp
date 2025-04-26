import React from 'react'
export const Counter = () => {
    const [count,setCount] = React.useState(0);
    const handleIncrement = () => {
        console.log(count);
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleIncrement} name="Increment">Increment</button>
        <button onClick={handleDecrement} name="Decrement">Decrement</button>
      </div>
    </div>
  )
}