type ButtonProps = {
  location: string
  handleOnClick: () => void
}

const Button = ({location, handleOnClick}: ButtonProps) => {
  return (
    <div>
      <button disabled={location === ''} onClick={handleOnClick}>
        Search
      </button>
    </div>
  )
}

export default Button
