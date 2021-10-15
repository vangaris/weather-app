type knotsProps = {
  knots: number
}

function Knots({knots}: knotsProps) {
  return (
    <div>
      <h2>{knots}</h2>
    </div>
  )
}

export default Knots
