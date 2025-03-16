import { useState } from 'react';

// Initial render => number = 0
// second render => number = 1

// Queue [(n) => n + 1, (n) => 1 + 1, (n) =>2 + 1]
//       [1, 2, 3]
export default function Counter() {
  const [number, setNumber] = useState(0);

  console.log('re-render');

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1); // add to queue
          setNumber((n) => n + 1); // add to queue
          setNumber((n) => n + 1); // add to queue
        }}
      >
        +3
      </button>
    </>
  );
}
