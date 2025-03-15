import { useEffect, useRef, useState } from 'react';

function RefExplain() {
  // const [user, setUser] = useState({ name: 'Van' });

  const [count, setCount] = useState(0);

  const data = { name: 'John' };

  const ref = useRef({ name: 'John' });

  useEffect(() => {
    console.log('DATA CHANGE', data);
  }, [data]);

  useEffect(() => {
    console.log('REF CHANGE', ref.current);
  }, [ref.current]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default RefExplain;
