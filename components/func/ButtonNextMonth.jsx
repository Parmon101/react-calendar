export function ButtonNextMonth({setCount}) {
  return(
        // <div onClick={() => setCount(месяц)} />
      <div className="col col-end">
        <div className="icon" onClick={() => setCount(prevCount => prevCount.add(1,'month'))}>chevron_right</div>
      </div>
  )
}