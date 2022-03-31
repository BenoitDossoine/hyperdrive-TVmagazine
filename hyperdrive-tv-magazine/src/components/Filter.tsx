import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

function Filter(){

  let [searchParams, setSearchParams] = useSearchParams();

  function addFilterQuery(event:any){
    const params = {filter: `${event.target.value}`,
    search: searchParams.get("search") || ''};
    setSearchParams(params);
  }

  return(
    <select name="filter" id="filter" onChange={addFilterQuery}>
      <option value="time">Start time</option>
      <option value="length">Duration</option>
      <option value="alphabet">A-Z</option>
    </select>
  )
}

export {Filter}