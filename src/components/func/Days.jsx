const dateFormat = "dddd";

export function Days({ count })  {
  let startDate = count.startOf('week')

  return (
    <div className="days row">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="col col-center" key={i}>
          {startDate.add(i, 'day').format(dateFormat)}
        </div>
      ))}
    </div>
  )
}
