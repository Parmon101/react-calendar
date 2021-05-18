export function Modal({selectedDay,count,showModal, active, setActive}) {
  return (

    <div className={active ? "modal active" : "modal"} onClick={() => setActive(true)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
         <span className="close-modal" onClick={()=> {showModal()}}>X</span>
         <span > Содержимое окна:</span>
         <br/>
         <span>Выбрано {selectedDay} {count.format('MMMM')}</span>
      </div>

    </div>
    
  )
}