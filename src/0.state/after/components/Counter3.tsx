import { useState } from 'react';

// INITIAL RENDER => number = 0
export default function Counter3() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            console.log(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
}
