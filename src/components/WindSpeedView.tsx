type speedProps = {
  speed: number
}

function WindSpeedView({speed}: speedProps) {
  return (
    <div>
      <h2>{speed}</h2>
    </div>
  )
}

export default WindSpeedView
