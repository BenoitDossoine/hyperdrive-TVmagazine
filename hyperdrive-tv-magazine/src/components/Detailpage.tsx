import React from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "../hooks/Loading.hooks";
import Episode from "../interfaces/Episode";
import { showService } from "../services/ShowService";
import calculateEndTime from "../utils/endTimeCalc";

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
        calculateEndTime(episode.airtime,episode.runtime);
        return(
            <div className="episodeDiv">
                {episode.image?
                <img src={episode.image} alt={`${episode.name}`} className="showImg" />:
                <img src="https://picsum.photos/430/600" alt="placeholderImg" className="showImg" />
                }
                <div className="showInfo">
                    <h1 className="episodeTitle">{episode.name}</h1>
                    <p className="episodeInfo">Season {episode.season} - Episode {episode.number}</p>
                    <div className="showDescription" dangerouslySetInnerHTML={{ __html: episode.summary}}></div>
                    <p className="airtime">{episode.airtime} - {calculateEndTime(episode.airtime,episode.runtime)}</p>
                    <div className="episodeRating">
                        {episode.rating.average?
                            <p>{episode.rating.average}/5</p>:
                            <p>Not yet rated</p>
                        }
                    </div>  
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