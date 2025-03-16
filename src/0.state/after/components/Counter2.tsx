import { useState } from 'react';

// INITIAL => Snapshot number = 0
// SECOND => Snapshot number = 5
export default function Counter2() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          console.log(number); // WHAT
        }}
      >
        +5
      </button>
    </>
  );
}
