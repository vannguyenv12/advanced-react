import { memo } from 'react';

const DisplayNumber = ({
  count,
  handleIncrement,
}: {
  count: { value: number };
  handleIncrement: () => void;
}) => {
  console.log('DisplayNumber re-render');
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <h2>Count: {count.value}</h2>
    </>
  );
};

export default memo(DisplayNumber);
