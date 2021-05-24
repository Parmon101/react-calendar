import React, { useState } from 'react'

import "./App.css";
import dayjs from 'dayjs'

import {CurrentDate} from './components/func/CurrentDate'
import {ButtonNextMonth} from './components/func/ButtonNextMonth'
import {ButtonPrevMonth} from './components/func/ButtonPrevMonth'

import {Days} from './components/func/Days'
import {Cells} from './components/func/Cells'

import {Modal} from './components/func/Modal'

import {Schedule} from './components/func/Schedule'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function App () {
  const currentMonth = dayjs()
  const [count, setCount] = useState(currentMonth);

  const [showModal, setShowModal] = useState(false)

  const [selectedDay, setSelectedDay] = useState(0)

  const [startDate, setStartDate] = useState(new Date());

  // console.log(count.format("ddd MMMM YYYY HH:MM:ss"));
  // console.log(startDate);

  // const [currDay, setCurrDay] = useState()
  // const [currMonth, setCurrMonth] = useState()
  // const [currYear, setCurrYear] = useState()
  
  return (
    <div className='calendar'> 
      <div className="header row flex-middle">
        <ButtonPrevMonth setCount={setCount} />
        <CurrentDate count={count} />
        <ButtonNextMonth setCount={setCount} />
      </div>
      <Days count={count}/>
      <Cells 
        count={count}
        onAdd={() => setShowModal(!showModal)} 
        setSelectedDay={setSelectedDay}
      />
      <Modal 
        count={count}
        selectedDay={selectedDay}
        showModal={() => setShowModal(!showModal)} 

        active={showModal}
        setActive={setShowModal}
        />
      <Schedule
        count={count}
        
        // setCurrDay={setCurrDay}
        // setCurrMonth={setCurrMonth}
        // setCurrYear={setCurrYear}

      />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        calendarStartDay={3}
      />
      {/* <p>{startDate.getDate()} {startDate.getMonth()+1} {startDate.getFullYear()}</p> */}
    </div>

  );
}

export default App;
