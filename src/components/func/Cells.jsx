// import { default as dayjs } from 'dayjs';

export function Cells({ count, onAdd, setSelectedDay, startDate }) {
  // остатки дней предыдущего месяца
  const leftDaysWeek = count.startOf('month').day() -1;
  const allDaysInCurrentMonth = count.endOf('month').date()-1;

  const prevMonthDays2 = Array.from({ length: leftDaysWeek },(_, index) => {
    const day = count.subtract(1,'month').add(allDaysInCurrentMonth-index, 'days');
    
    const diff = day.diff(startDate, 'days');

    return {
      day: day.format('D'),
      diff,
    }
  }).reverse();

  console.log(leftDaysWeek);
  console.log(allDaysInCurrentMonth);
  

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
    const day = count.add(1,'month').startOf('month').add(index, 'days');

    const diff = day.diff(startDate, 'days');

    return {
      day: day.format('D'),
      diff,
    }
  });

  return (
    <div className="body ">
      
      {prevMonthDays2.map(({ day, diff }) => {
        const diffRemainder = diff % 4;

        const isDayShift = diffRemainder === 0 + 3 || diffRemainder === -3;
        const nightStart = diffRemainder === 0;
        const nightEnd = diffRemainder === 0 + 1 || diffRemainder === -1;
        const week = diffRemainder === 0 + 2 || diffRemainder === -2;
      
        return (
          <div className="row col cell weekend"  key={`prev_${day}`}>
            <span>{day}</span>
            {isDayShift && 'Дневная'}
            {nightStart && 'Ночь начало'}
            {nightEnd && 'Ночная конец'}
            {week && 'Вых'}
          </div>
          )
        })}

      {thisMonthDays.map(({ day, diff }) => {
        const diffRemainder = diff % 4;

        const isDayShift = diffRemainder === 0;
        const nightStart = diffRemainder === 0 + 1 || diffRemainder === -1;
        const nightEnd = diffRemainder === 0 + 2 || diffRemainder === -2;
        const week = diffRemainder === 0 + 3 || diffRemainder === -3;


        return (
             (day === currDay) ?
              <div className="row col cell select"  onClick={()=> {onAdd(); setSelectedDay(day)}} key={`this_${day}`}>
                <span>{day}</span>
                {isDayShift && 'Дневная'}
                {nightStart && 'Ночь начало'}
                {nightEnd && 'Ночная конец'}
                {week && 'Вых'}
              </div>
               :
              <div className="row col cell"  onClick={()=> {onAdd(); setSelectedDay(day)}} key={`this_${day}`}>
                <span>{day}</span>
                {isDayShift && 'Дневная'}
                {nightStart && 'Ночь начало'}
                {nightEnd && 'Ночная конец'}
                {week && 'Вых'}
              </div>
           )
        })}

      {nextMonthDays.map(({ day, diff }) => {
        const diffRemainder = diff % 4;

        const isDayShift = diffRemainder === 0;
        const nightStart = diffRemainder === 0 + 3 || diffRemainder === -3;
        const nightEnd = diffRemainder === 0 + 2 || diffRemainder === -2;
        const week = diffRemainder === 0 + 1 || diffRemainder === -1;
      
        return (
          <div className="row col cell weekend"  key={`prev_${day}`}>
            <span>{day}</span>
            {isDayShift && 'Дневная'}
            {nightStart && 'Ночь начало'}
            {nightEnd && 'Ночная конец'}
            {week && 'Вых'}
          </div>
          )
        })}

    </div>
  );
}

