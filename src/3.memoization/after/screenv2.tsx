import { useCallback, useEffect, useMemo, useState } from 'react';

function ScreenV2() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  // const fetchDataCallback = useCallback(fetchData, []);
  const fetchDataMemo = useMemo(() => {
    return fetchData;
  }, []);

  useEffect(() => {
    console.log('Run Effect');
    fetchDataMemo();
  }, [fetchDataMemo]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>Value: {count}</h3>
    </div>
  );
}

export default ScreenV2;
