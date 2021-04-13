import dayjs from 'dayjs'
import React, {useState} from 'react'

let state = {
  currentMonth: dayjs(), // № month (0-11)
  selectedDate: new Date().getDay(), // № day (0-6)
}

console.log('original state = ' +state.currentMonth.format('DD MM YYYY'));

export default state