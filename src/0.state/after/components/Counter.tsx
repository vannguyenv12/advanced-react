import { useState } from 'react';

// Initial render => number = 0
// second render => number = 1
export default function Counter() {
  const [number, setNumber] = useState(0);

  console.log('re-render');

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
