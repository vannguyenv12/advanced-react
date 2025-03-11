/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useMemo, useState } from 'react';
import DisplayNumber from './components/DisplayNumber';

function ScreenMemo() {
  const [count, setCount] = useState({ value: 0 });
  const [random, setRandom] = useState(Math.random());

  const countMemo = useMemo(() => {
    return count;
  }, [count.value]);

  const handleIncrement = useCallback(() => {
    setCount({ value: count.value + 1 });
  }, [count.value]);

  return (
    <div>
      <button onClick={() => setRandom(Math.random())}>Change Random</button>
      <DisplayNumber count={countMemo} handleIncrement={handleIncrement} />
    </div>
  );
}

export default ScreenMemo;
