import {state} from './../Calendar'

function buttonNextMonth(e) {
  // e.preventDefault();
  state.currentMonth = state.currentMonth.add(1, 'month')
  console.log(state.currentMonth);
}

export default buttonNextMonth