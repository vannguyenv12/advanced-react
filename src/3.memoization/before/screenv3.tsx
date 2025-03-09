const sampleItems = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 1 },
  { price: 7, quantity: 3 },
];

function ScreenV3() {
  const totalPrice = sampleItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default ScreenV3;
