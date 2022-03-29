import { Link } from "react-router-dom";
import Props from "../interfaces/Props";

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
        <button className="episodeBtn">
          <Link className="episodeLink" to={`/show/${props.show.show.id}/${props.show.season}/${props.show.number}`}>More info</Link>
        </button>
      </div>
    </div>);
}

export default ShowTile;