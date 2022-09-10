import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState<string>();
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const resetAll = () => {
    setIncrementAmount('0');
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        name="amount-increment"
        id="amount-increment"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
