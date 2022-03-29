function Filter(){
    return(
      <select name="filter" id="filter">
        <option value="time">Start time</option>
        <option value="length">Duration</option>
        <option value="alphabet">A-Z</option>
      </select>
    )
}

export {Filter}