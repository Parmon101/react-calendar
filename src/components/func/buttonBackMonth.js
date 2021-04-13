import state from './../const/state'

function buttonNextMonth(e) {
  // e.preventDefault();
  state.currentMonth = state.currentMonth.subtract(1, 'month')
  console.log(state.currentMonth);
}

export default buttonNextMonth