let Days = (count) => {
  const dateFormat = "dddd";
  const days = [];

  let startDate = count.startOf('week')

  for (let i = 1; i < 8; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {startDate.add(i, 'day').format(dateFormat)}
      </div>
    );
  }
  return <div className="days row">{days}</div> 
}

export default Days