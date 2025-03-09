/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

const DisplayNumber = ({ count }: { count: number }) => {
  console.log('DisplayNumber re-render');
  return <h2>Count: {count}</h2>;
};

function ScreenMemo() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(Math.random());

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setRandom(Math.random())}>Change Random</button>
      <DisplayNumber count={count} />
    </div>
  );
}

export default ScreenMemo;
