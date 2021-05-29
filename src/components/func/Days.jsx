const dateFormat = "dddd";

export function Days({ count })  {
  let startDate = count.startOf('week').day(1)

  return (
    <div className="days row">
      {Array.from({ length: 7 }).map((_, i) => (
        <div className="col col-center" key={i}>
          {startDate.add(i, 'day').format(dateFormat)}
        </div>
      ))} 
    </div>
  )
}
