const DisplayNumber = ({ count }: { count: number }) => {
  console.log('DisplayNumber re-render');
  return <h2>Count: {count}</h2>;
};

export default DisplayNumber;
