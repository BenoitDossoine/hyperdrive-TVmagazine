import React from "react";
import { showService } from '../services/ShowService';
import { useLoading } from '../hooks/Loading.hooks';
import ShowTile from "./ShowTile";
import Show from "../interfaces/Show";


function ShowList(){

    const [shows, setShows] = React.useState<Show[]>([]);
    const isLoading = useLoading(shows);
    React.useEffect(()=>{
      showService.getAllShows()
        .then((response)=>{
          setShows(response);
        })
      }, []);
      
    return(
        <div className="showList">{
            isLoading ? 
            <p>Loading shows...</p> :
            <div>
            {shows.map((show)=>{
                return <ShowTile key={show.id} show={show}/>
            }
            )}
            </div> 
        }</div>
    );
}

export {ShowList}