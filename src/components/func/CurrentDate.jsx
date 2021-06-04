export function CurrentDate({count}) {
  return(
      <div className="col col-center">
        <span>{count.format("DD MMMM YYYY")}</span>
      </div>
  )
}
