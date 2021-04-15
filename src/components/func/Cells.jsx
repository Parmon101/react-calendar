let Cells = (count) => {
  const monthStart = count.startOf('month').day() - 1;
  
  /* Создаю массив, который будет наполнен отступами для недостающих дней предыдущего месяца.
    Если monthStart будет 0, то массив будет пустой, поэтому можно дальше не делать никаких проверок
    "monthStart - index" позволяет не реверсить массив, т.к это массив наполненый ОТСТУПАМИ, которые должны идти от большего к меньшему
  */
  const rangeOfDaysNeeded = Array.from({ length: monthStart }, (_, index) => monthStart - index);

  const prevMonthDays = rangeOfDaysNeeded.map(dayShift => count.startOf('month').subtract(dayShift, 'day').format('D'));

  const endOfMonth = count.endOf('month').date();
  const thisMonthDays = Array.from({ length: endOfMonth }, (_, index) => index + 1);

  return (
    <div className="body">
      {prevMonthDays.map(day => (
        <div className="row col cell" key={`prev_${day}`}>
          <span>{day}</span>
        </div>
      ))}

      {thisMonthDays.map(day => (
        <div className="row col cell" key={`this_${day}`}>
          <span>{day}</span>
        </div>
      ))}

    </div>
  );    
}

  export default Cells