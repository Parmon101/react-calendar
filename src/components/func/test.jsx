let Counter = (count, setCount) => {

  return (
    <>
      Счёт: {count.format('DD MMMM YYYY')}

      <button onClick={() => setCount(prevCount => prevCount.subtract(1,'month'))}>-</button>

      <button onClick={() => setCount(prevCount => prevCount.add(1,'month'))}>+</button>
    </>
  );
}

export default Counter