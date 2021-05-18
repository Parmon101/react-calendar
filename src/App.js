import React, { useState } from 'react'

import "./App.css";
import dayjs from 'dayjs'

import {CurrentDate} from './components/func/CurrentDate'
import {ButtonNextMonth} from './components/func/ButtonNextMonth'
import {ButtonPrevMonth} from './components/func/ButtonPrevMonth'

import {Days} from './components/func/Days'
import {Cells} from './components/func/Cells'

import {Modal} from './components/func/Modal'

function App () {
  const currentMonth = dayjs()
  const [count, setCount] = useState(currentMonth);

  const [showModal, setShowModal] = useState(false)

  const [selectedDay, setSelectedDay] = useState(0)
  // console.log(showModal);
  // console.log(count);
  // console.log(selectedDay);
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
     

    </div>

  );
}

export default App;
