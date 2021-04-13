import React from 'react'
import "./Calendar.css";
import Days from './func/days'
import Header from './func/Header'
import Cells from './func/Cells'



function Calendar() {


  // onDateClick = day => {}
  // nextMonth()

  return (
    <div className='calendar'> 
      {Header()}
      {Days()}
      {Cells()}

    </div>
  );
}

export default Calendar;