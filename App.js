import React, { useState } from 'react'

import "./App.css";
import dayjs from 'dayjs'

import {CurrentDate} from './components/func/CurrentDate'
import {ButtonNextMonth} from './components/func/ButtonNextMonth'
import {ButtonPrevMonth} from './components/func/ButtonPrevMonth'

import {Days} from './components/func/Days'
import {Cells} from './components/func/Cells'

// import {ClickModal} from './components/func/ClickModal'

function App () {
  const currentMonth = dayjs()
  const [count, setCount] = useState(currentMonth);

  return (
    <div className='calendar'> 
      <div className="header row flex-middle">
        <ButtonPrevMonth setCount={setCount} />
        <CurrentDate count={count} />
        <ButtonNextMonth setCount={setCount} />
      </div>
      <Days count={count}/>
      <Cells count={count}/>
      {/* <ClickModal count={Cells} /> */}

    </div>

  );
}

export default App;
