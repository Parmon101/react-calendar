export function ButtonPrevMonth({setCount}) {
  return(
        // <div onClick={() => setCount(месяц)} />
      <div className="col col-start">
        <div className="icon" onClick={() => setCount(prevCount => prevCount.subtract(1,'month'))}>
          chevron_left
        </div>
      </div>      
  )
}
