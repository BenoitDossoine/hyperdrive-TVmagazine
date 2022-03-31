import { FilterDiv } from './FilterDiv';
import { ShowList } from './ShowList';

function Homepage(){
    return(
        <div className="homepage">
        <FilterDiv />
        <ShowList />
        </div>
    )
}

export default Homepage