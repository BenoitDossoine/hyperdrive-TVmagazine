import { Filter } from "./Filter"
import { Search } from "./Search"

function FilterDiv(){
    return(
      <div className="filterContainer">
        <Search/>
        <Filter/>
      </div>
    )
}

export {FilterDiv}
  