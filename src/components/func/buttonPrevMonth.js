import {state} from './../Calendar'

function buttonPrevMonth(e) {
  // e.preventDefault();
  state.currentMonth = state.currentMonth.subtract(1, 'month')
  console.log(state.currentMonth.format('DD MM YYYY'));
}

export default buttonPrevMonth