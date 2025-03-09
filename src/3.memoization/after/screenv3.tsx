import { useMemo, useState } from 'react';

const sampleItems = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 1 },
  { price: 7, quantity: 3 },
];

function ScreenV3() {
  const [count, setCount] = useState(0);

  const totalPrice = useMemo(
    () =>
      sampleItems.reduce((sum, item) => {
        console.log('re-calculate again...');
        return sum + item.price * item.quantity;
      }, 0),
    []
  );

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>value {count}</h3>
      <h2>Cart</h2>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default ScreenV3;
