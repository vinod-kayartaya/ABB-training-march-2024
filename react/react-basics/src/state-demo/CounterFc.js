import React, { useState } from 'react';

const CounterFc = () => {
  console.log('CounterFc is rendered');
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <div className='container'>
        <h1>State demo using functional component</h1>
        <hr />
        <h3>Value of count is {count}</h3>
        <button
          onClick={decrementCount}
          className='btn btn-outline-primary me-3'
        >
          Decrement
        </button>
        <button onClick={incrementCount} className='btn btn-outline-primary'>
          Increment
        </button>
      </div>
    </>
  );
};

export default CounterFc;
