import React, { useState } from 'react'
import "./Calendar.css";
import Days from './func/days'
import Header from './func/Header'
import Cells from './func/Cells'
import dayjs from 'dayjs'

import Counter from './func/test'


function Calendar() {
  let currentMonth = dayjs()

  const [count, setCount] = useState(currentMonth);

  return (
    <div className='calendar'> 
      {Counter(count, setCount)}
      {Header(count, setCount)}
      {Days(count, setCount)}
      {Cells(count, setCount)}

    </div>
  );
}

export  {Calendar};
