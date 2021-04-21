export function Modal({selectedDay,count,onAdd}) {
  return (
    // <div className="modal">
    //   <span>{`${selectedDay} ${count.format( 'MMMM YYYY')}`}</span>
    // </div>
    <div className="modal-bg">
        <div className="modal">
        <span className="close-modal" onClick={()=> {onAdd()}}>X</span>
          <span > Содержимое окна:</span>
          <br/>
          <span>Выбрано {selectedDay} {count.format('MMMM')}</span>
        </div>
      </div>
    
  )
}