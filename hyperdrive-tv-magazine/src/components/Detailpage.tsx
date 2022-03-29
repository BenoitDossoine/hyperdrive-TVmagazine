import React from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "../hooks/Loading.hooks";
import Episode from "../interfaces/Episode";
import { showService } from "../services/ShowService";

function DetailPage(){

    const {showId,season,episodeNumber} = useParams();
    const [episode, setEpisode] = React.useState<Episode>();
    const isLoading = useLoading(episode);

    React.useEffect(()=>{
        if(showId && season && episodeNumber){
            showService.getEpisode(showId, season, episodeNumber)
            .then(response=>setEpisode(response));
        }
    }, [showId,season,episodeNumber]);

    if(episode) {
        return(
            <div className="episodeDiv">
                <img src={episode.image} alt="" className="showImg" />
                <div className="showInfo">
                    <h1 className="episodeTitle">{episode.name}</h1>
                    <h2 className="showName">{episode.name}</h2>   
                    <p className="airtime">{episode.airtime}</p>
                    <div className="showDescription" dangerouslySetInnerHTML={{ __html: episode.summary}}></div>  
                </div>
            </div>
        );
    } else {
        return (
            <div className="episodeDiv">
                <p>Not found</p>
            </div>
        )
    }
}

export default DetailPage;