import { useCallback, useEffect, useState } from 'react';

function ScreenV2() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [count]);

  useEffect(() => {
    console.log('Run Effect');
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>Value: {count}</h3>
    </div>
  );
}

export default ScreenV2;
