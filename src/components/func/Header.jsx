import state from './../const/state'
import nextMonth  from './../func/buttonNextMonth'
import prevMonth  from './../func/buttonBackMonth'

let Header = () => {


  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>{state.currentMonth.format("DD MMMM YYYY")}</span>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={nextMonth}>chevron_right</div>
      </div>
    </div>
  );
}

export default Header