// import { default as dayjs } from 'dayjs';

export function Cells({ count, onAdd, setSelectedDay, startDate }) {
  const monthStart = count.startOf('month').day();

  // const monthStart = count.startOf('month').day() - 1;
  // const rangeOfDaysNeeded = Array.from({ length: monthStart }, (_, index) => monthStart - index);
  // const monthStart2 = rangeOfDaysNeeded.map(dayShift => count.startOf('month').subtract(dayShift, 'day').format('D'));

  // остатки дней предыдущего месяца
  const prevMonthDays = Array.from({ length: monthStart-1 }, (_, index) => {
    const day = count.endOf('month').add(index, 'days');
    
    const diff = day.diff(startDate, 'days');
    
    return {
      day: day.format('D'),
      diff,
    }
  }).reverse();
  

  const endOfMonth = count.endOf('month').date();
  const thisMonthDays = Array.from({ length: endOfMonth }, (_, index) => {
    const day = count.startOf('month').add(index, 'days');

    const diff = day.diff(startDate, 'days');

    return {
      day: day.format('D'),
      diff,
    }
  });


  const currDay = count.format("DD");

  // осталось дней до конца недели
  const daysLeftInWeek = 7- count.endOf('month').day();

  // заполняем остаток недели новыми числами месяца
  const nextMonthDays = Array.from({ length: daysLeftInWeek}, (_, index) => {
    const day = count.startOf('month').add(index, 'days');

    const diff = day.diff(startDate, 'days');

    return {
      day: day.format('D'),
      diff,
    }
  });
  console.log(prevMonthDays);
  console.log(thisMonthDays);
  console.log(nextMonthDays);
  return (
    <div className="body ">
      
      {prevMonthDays.map(({ day, diff }) => {
        const diffRemainder = diff % 4;

        const isDayShift = diffRemainder === 0;
        const nightStart = diffRemainder === 0 + 1 || diffRemainder === -3;
        const nightEnd = diffRemainder === 0 + 2 || diffRemainder === -2;
      
        return (
          <div className="row col cell weekend"  key={`prev_${day}`}>
            <span>{day}</span>
            {isDayShift && 'Дневная'}
            {nightStart && 'Ночь начало'}
            {nightEnd && 'Ночная конец'}
          </div>
          )
        })}

      {thisMonthDays.map(({ day, diff }) => {
        const diffRemainder = diff % 4;

        const isDayShift = diffRemainder === 0;
        const nightStart = diffRemainder === 0 + 1 || diffRemainder === -3;
        const nightEnd = diffRemainder === 0 + 2 || diffRemainder === -2;

        return (
             (day === currDay) ?
              <div className="row col cell select"  onClick={()=> {onAdd(); setSelectedDay(day)}} key={`this_${day}`}>
                <span>{day}</span>
                {isDayShift && 'Дневная'}
                {nightStart && 'Ночь начало'}
                {nightEnd && 'Ночная конец'}
              </div>
               :
              <div className="row col cell"  onClick={()=> {onAdd(); setSelectedDay(day)}} key={`this_${day}`}>
                <span>{day}</span>
                {isDayShift && 'Дневная'}
                {nightStart && 'Ночь начало'}
                {nightEnd && 'Ночная конец'}
              </div>
           )
        })}

      {nextMonthDays.map(({ day, diff }) => {
        const diffRemainder = diff % 4;

        const isDayShift = diffRemainder === 0;
        const nightStart = diffRemainder === 0 + 1 || diffRemainder === -3;
        const nightEnd = diffRemainder === 0 + 2 || diffRemainder === -2;
      
        return (
          <div className="row col cell weekend"  key={`prev_${day}`}>
            <span>{day}</span>
            {isDayShift && 'Дневная'}
            {nightStart && 'Ночь начало'}
            {nightEnd && 'Ночная конец'}
          </div>
          )
        })}

    </div>
  );
}

