import React, { useState } from 'react'
import "./Calendar.css";
import Days from './func/days'
import Header from './func/Header'
import Cells from './func/Cells'
import dayjs from 'dayjs'



let state = {
  currentMonth: dayjs(), // № month (0-11)
}

function Calendar() {

  const [count, setCount] = useState(state.currentMonth)
  
  console.log(state.currentMonth);
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

export  {state,Calendar};
