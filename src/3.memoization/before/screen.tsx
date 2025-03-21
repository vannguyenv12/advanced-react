/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import DisplayNumber from './components/DisplayNumber';

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
