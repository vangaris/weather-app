type InputSearchProps = {
  location: string
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({location, handleOnChange}: InputSearchProps) => {
  return (
    <div>
      <input value={location} onChange={handleOnChange} />
    </div>
  )
}

export default SearchInput
