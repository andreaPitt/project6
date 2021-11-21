import React, { useState } from 'react';

function Counter() { 
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return <div className="container">
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
}

export default Counter;