export function ClickModal({Cells}) {
  console.log(`Вы выбрали ${Cells}`);
  return (
    <div onClick={()=> Cells}>test</div>
  )
  // Cells.preventDefault();
}