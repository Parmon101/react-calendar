import React from 'react'
import "./Calendar.css";
import dayjs from 'dayjs'



function Calendar() {
  const state = {
    currentMonth: dayjs(), // № month (0-11)
    selectedDate: new Date().getDay(), // № day (0-6)
  }

  let Header = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon">
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dayjs().format("DD MMMM YYYY")}</span>
        </div>
        <div className="col col-end">
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  let Days = () => {
    const dateFormat = "dddd";
    const days = [];

    let startDate = state.currentMonth.startOf('week')

    for (let i = 1; i < 8; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {startDate.add(i, 'day').format(dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div> 
  }
  

  let Cells = () => {
    let startDayWeekMonth = dayjs().startOf('month').day()
    let endDayCurrentMonth = dayjs().endOf('month').format('D')
    let startDayCalendar = dayjs().startOf('month').subtract(startDayWeekMonth-1, 'day').format('D')

    let currenDate = dayjs().format('D')
    let rows = [];
    let days = [];

    while (startDayCalendar <= endDayCurrentMonth) {
      for (let i = startDayCalendar; i <= endDayCurrentMonth;  i++) {
        startDayCalendar = dayjs()
        days.push(
          <div key={days}>
            <span>{i}</span>
          </div>
        );
        if (i == currenDate) {
          rows.push(
            <div className="row col cell select" key={i}>
              {i}
            </div>
          );
        } else {
          rows.push(
            <div className="row col cell" key={i}>
              {i}
            </div>
          );
        }
      }
      days =[]
    }

    return <div className="body ">{rows}</div>;
    
  }

  
  // onDateClick = day => {}
  // nextMonth = () => {}




  return (
    <div className='calendar'> 
      {Header()}
      {Days()}
      {Cells()}

    </div>
  );
}

export default Calendar;