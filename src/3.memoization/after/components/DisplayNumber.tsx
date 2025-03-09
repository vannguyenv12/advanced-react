import { memo } from 'react';

const DisplayNumber = ({ count }: { count: { value: number } }) => {
  console.log('DisplayNumber re-render');
  return <h2>Count: {count.value}</h2>;
};

export default memo(DisplayNumber);
