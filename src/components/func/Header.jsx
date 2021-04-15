let Header = (count, setCount) => {

  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={() => setCount(prevCount => prevCount.subtract(1,'month'))}>
          chevron_left
        </div>
      </div>      
      <div className="col col-center">
        <span>{count.format("DD MMMM YYYY")}</span>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={() => setCount(prevCount => prevCount.add(1,'month'))}>chevron_right</div>
      </div>
    </div>
  );
}

export default Header