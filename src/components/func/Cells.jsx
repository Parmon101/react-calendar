// import { default as dayjs } from 'dayjs';

export function Cells({ count, onAdd, setSelectedDay, startDate }) {
  const monthStart = count.startOf('month').day() - 1;

  const rangeOfDaysNeeded = Array.from({ length: monthStart }, (_, index) => monthStart - index);

  // TODO: сюда
  const prevMonthDays = rangeOfDaysNeeded.map(dayShift => count.startOf('month').subtract(dayShift, 'day').format('D'));

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
  // TODO: сюда
  const nextMonthDays = Array.from({ length: daysLeftInWeek }, (_, index) => index +1)

  return (
    <div className="body ">
      {prevMonthDays.map(day => (
        <div className="row col cell weekend"  key={`prev_${day}`}>
          <span>{day}</span>
        </div>
      ))}

      {thisMonthDays.map(({ day, diff }) => {
        const diffRemainder = diff % 4;

        const isDayShift = diffRemainder === 0;
        const nightStart = diffRemainder === 0 + 1 || diffRemainder === -3;
        const nightEnd = diffRemainder === 0 + 2 || diffRemainder === -2;

        return (
             (day === currDay) ?
              <div className="row col cell select isDay"  onClick={()=> {onAdd(); setSelectedDay(day)}} key={`this_${day}`}>
                <span>{day}</span>
                {isDayShift && 'Д'}
                {nightStart && 'Нн'}
                {nightEnd && 'Нк'}
              </div>
               :
              <div className="row col cell isDay"  onClick={()=> {onAdd(); setSelectedDay(day)}} key={`this_${day}`}>
                <span>{day}</span>
                {isDayShift && 'Д'}
                {nightStart && 'Нн'}
                {nightEnd && 'Нк'}
              </div>
              
           )
        })}

      {nextMonthDays.map(day => (
        <div className="row col cell weekend" key={`next${day}`}>
          <span>{day}</span>
        </div>
      ))}

    </div>
  );
}

