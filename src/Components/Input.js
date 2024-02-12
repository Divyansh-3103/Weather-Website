import { FaArrowRight } from "react-icons/fa";

const Input = ({searchValue, setSearchValue, handleSubmit, visibleValue}) => {
  return (
    <div className="Input" style={{visibility: visibleValue ? "visible" : "hidden"}}>
        <form onSubmit={handleSubmit}>
            <label>Search City: </label>
            <input autoFocus id="searchColor" type="text" placeholder="enter city name" required value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button type="submit"> <FaArrowRight /> </button>
        </form>
    </div>
  )
}

export default Input