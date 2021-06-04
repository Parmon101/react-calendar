import React, { useState } from 'react'

import "./App.css";
import dayjs from 'dayjs'

import {CurrentDate} from './components/func/CurrentDate'
import {ButtonNextMonth} from './components/func/ButtonNextMonth'
import {ButtonPrevMonth} from './components/func/ButtonPrevMonth'

import {Days} from './components/func/Days'
import {Cells} from './components/func/Cells'

import {Modal} from './components/func/Modal'

// import {Schedule} from './components/func/Schedule'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const useDidMount = (func) => React.useLayoutEffect(func, []);

// const useWillMount = (func) => {
//   const willMount = React.useRef(true)

//   if (willMount.current) func()

//   willMount.current = false
// }

function App () {
  const currentMonth = dayjs()
  const [count, setCount] = useState(currentMonth);

  // useWillMount(() => {
  //   const updateLocale = require('dayjs/plugin/updateLocale')
  //   dayjs.extend(updateLocale);
  // });

  // useWillMount(() => console.log('App БУДЕТ отрендерен'));
  // useDidMount(() => console.log('App УЖЕ отрендерен'));
  

  const [showModal, setShowModal] = useState(false)

  const [selectedDay, setSelectedDay] = useState(0)

  const [startDate, setStartDate] = useState(dayjs().startOf('day').toDate());

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
        startDate={dayjs(startDate)}
      />
      <Modal
        count={count}
        selectedDay={selectedDay}
        showModal={() => setShowModal(!showModal)}

        active={showModal}
        setActive={setShowModal}
        />

      <p> Выбрать день начала дневной смены</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        calendarStartDay={3}
      />
    </div>

  );
}

export default App;
