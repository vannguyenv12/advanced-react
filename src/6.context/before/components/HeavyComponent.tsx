function HeavyComponent() {
  const heavyCalculation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }

    return sum;
  };

  heavyCalculation();

  return null;
}

export default HeavyComponent;
