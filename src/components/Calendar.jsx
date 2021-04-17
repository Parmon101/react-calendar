import React, { useState } from 'react'
import "./Calendar.css";
import dayjs from 'dayjs'

import Days from './func/days'
import Header from './func/Header'
import Cells from './func/Cells'


function Calendar() {
  const currentMonth = dayjs()

  const [count, setCount] = useState(currentMonth);

  return (
    <div className='calendar'> 
      {Header(count, setCount)}
      {Days(count)}
      {Cells(count)}
      
    </div>
  );
}

export  {Calendar};