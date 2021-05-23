import dayjs from 'dayjs'
import React, { useState } from 'react'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";


export function Schedule({count}){
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  
  // current date
  const defDay = count.format("DD")
  const defMonth = count.format("MMMM")
  const defYear = count.format("YYYY")
  
  // const curDATE = dayjs().format("DD MMMM YYYY")
  // const {datea, selectDate} = useState(defDay)

  // gen days
  const currDay = count.daysInMonth();
  const days = Array.from({ length: currDay }, (_, index) => index +1);

  // gen months
  const updateLocale = require('dayjs/plugin/updateLocale')
  dayjs.extend(updateLocale)
  const newMonth = dayjs.updateLocale('en', {
    months : ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]
  })

  // gen years
  const currYear = count.year();
  const years = Array.from({ length: currYear + 100}, (_, index) => index +1);


  return(
    <form action="">
      <p>Выбрать первый день смены</p>
      <p>
        <select name="day" onChange={(e) => setSelectedDay(e.target.value)}>
          {days.map(day => (
            (day == defDay)?
            <option selected >{day}</option>
              :
            <option>{day}</option>
          ))}
        </select>
        <select name="month" onChange={(e) => setSelectedMonth(e.target.value)}>
          {newMonth.months.map(month => (
            (month == defMonth)?
            <option selected>{month}</option>
              :
            <option>{month}</option>
          ))}
        </select>
        <select name="year" onChange={(e) => setSelectedYear(e.target.value)}>
          {years.map(year => (
            (year == defYear)?
            <option  selected>{year}</option>
              :
            <option>{year}</option>
          ))}
        </select>
      </p>
      <p> Выбрано {selectedDay} {selectedMonth} {selectedYear}</p>
    </form>
  )
}