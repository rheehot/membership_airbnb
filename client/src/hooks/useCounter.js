import { useState } from 'react';

const useCounter = (state) => {
  const [count, setCount] = useState(state);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
