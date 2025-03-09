function HeavyComponent() {
  const heavyCalculation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }

    console.log('Calc completed');
    return sum;
  };

  heavyCalculation();

  return null;
}

export default HeavyComponent;
