import React from 'react';
import logo from './logo.svg';
import './index.css'
import { showService } from './services/ShowService';

interface Props {
  show: Show,
}

interface Show{
    id: number,
    name:string,
    show:{
      image: {
        medium: string,
      },
      medium: string,
      name:string,
      summary: string,
      type: string
    },
    airtime: string,

}

function App() {
  return (
    <>
      <FilterDiv />
      <ShowList />
    </>
  );
}

function FilterDiv(){
  return(
    <div className="filterContainer">
      <Search/>
      <Filter/>
    </div>
  )
}

function Search(){
  return(
    <input type="text" placeholder="Search" />
  );
}

function Filter(){
  return(
    <select name="filter" id="filter">
      <option value="time">Start time</option>
      <option value="length">Duration</option>
      <option value="alphabet">A-Z</option>
    </select>
  )
}

function ShowList(){

  const [shows, setShows] = React.useState<Show[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    setIsLoading(true);
    showService.getAllShows()
      .then((response)=>{
        setShows(response);

        setIsLoading(false);
      })
  }, []);

  return(
    <div>
      {shows.map((show)=>{
        return <ShowTile key={show.id} show={show}/>
      }
      )}
    </div>
  );
}

function ShowTile(props:Props){
  return (
    <div className="showContainer">
    <img src={props.show.show.image.medium} alt="" className="showImg" />
    <div className="showInfo">
      <h1 className="episodeTitle">{props.show.name}</h1>
      <h2 className="showName">{props.show.show.name}</h2>
      <p className="showType">{props.show.show.type}</p>
      <p className="airtime">{props.show.airtime}</p>
      <div className="showDescription" dangerouslySetInnerHTML={{ __html: props.show.show.summary}}></div>
    </div>
  </div>);
}

export default App;
